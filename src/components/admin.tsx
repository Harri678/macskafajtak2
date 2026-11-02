import { useState, type SyntheticEvent} from "react"
import { kezdoMacskak } from "../data/macskak"
import type { Macska } from "../types/Macska"

function Admin(){
     const [macskak, setMacskak] = useState<Macska[]>(kezdoMacskak)
     const [nev, setNev] = useState('')
     const [szarmazas, setSzarmazas] = useState('')
     const [testsuly, setTestsuly] = useState('')
     const [baratsagos, setBaratsagos] = useState(true)

     const [szerkesztesId, setSzerkesztesId] = useState<number | null>(null)

     const mentes = (e: SyntheticEvent<HTMLFormElement>) => {
          e.preventDefault()

          if (!nev.trim() || !szarmazas.trim() || Number(testsuly) <= 0) {
               alert('Tölts ki minden mezőt helyesen!')
               return
          }

          if (szerkesztesId !== null) {
               setMacskak(macskak.map(m =>
               m.id === szerkesztesId
                    ? {
                    ...m,
                    nev,
                    szarmazas,
                    testsuly: Number(testsuly),
                    baratsagos
                    }
                    : m
               ))
          } else {
               const ujMacska: Macska = {
               id: Date.now(),
               nev,
               szarmazas,
               testsuly: Number(testsuly),
               baratsagos
               }

               setMacskak([...macskak, ujMacska])
          }

          urites()
     }

  const urites = () => {
    setNev('')
    setSzarmazas('')
    setTestsuly('')
    setBaratsagos(true)
    setSzerkesztesId(null)
  }

  const szerkesztes = (macska: Macska) => {
    setNev(macska.nev)
    setSzarmazas(macska.szarmazas)
    setTestsuly(String(macska.testsuly))
    setBaratsagos(macska.baratsagos)
    setSzerkesztesId(macska.id)
  }

  const torles = (id: number) => {
     setMacskak(macskak.filter(m => m.id !== id))
  }

     return(
          <>
          <section>
            <h2>Admin felület</h2>

            <form onSubmit={mentes} className="card p-3 mb-4">

              <label className="form-label">
                Macskafajta neve
              </label>

              <input
                className="form-control mb-3"
                value={nev}
                onChange={e => setNev(e.target.value)}
              />

              <label className="form-label">
                Származás
              </label>

              <input
                className="form-control mb-3"
                value={szarmazas}
                onChange={e => setSzarmazas(e.target.value)}
              />

              <label className="form-label">
                Testsúly (kg)
              </label>

              <input
                type="number"
                min="0.1"
                step="0.1"
                className="form-control mb-3"
                value={testsuly}
                onChange={e => setTestsuly(e.target.value)}
              />

              <div className="form-check mb-3">
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked={baratsagos}
                  onChange={e => setBaratsagos(e.target.checked)}
                />

                <label className="form-check-label">
                  Barátságos
                </label>
              </div>

              <button className="btn btn-primary" type="submit">
                {szerkesztesId !== null ? 'Módosítás mentése' : 'Hozzáadás'}
              </button>

              {szerkesztesId !== null && (
                <button
                  type="button"
                  className="btn btn-secondary mt-2"
                  onClick={urites}
                >
                  Mégse
                </button>
              )}
            </form>

            <h3>Rekordok</h3>

            <div className="table-responsive">
              <table className="table table-bordered table-striped">
                <thead className="table-dark">
                  <tr>
                    <th>Név</th>
                    <th>Származás</th>
                    <th>Testsúly</th>
                    <th>Barátságos</th>
                    <th>Műveletek</th>
                  </tr>
                </thead>

                <tbody>
                  {macskak.map(macska => (
                    <tr key={macska.id}>
                      <td>{macska.nev}</td>
                      <td>{macska.szarmazas}</td>
                      <td>{macska.testsuly} kg</td>
                      <td>{macska.baratsagos ? 'Igen' : 'Nem'}</td>

                      <td>
                        <button
                          className="btn btn-warning btn-sm me-2"
                          onClick={() => szerkesztes(macska)}
                        >
                          Módosítás
                        </button>

                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => torles(macska.id)}
                        >
                          Törlés
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
          </>
     )
}

export default Admin