import type { Macska } from "../types/Macska"
import { kezdoMacskak } from "../data/macskak"
import { useState } from "react"

function Moderator(){
     const [macskak, setMacskak] = useState<Macska[]>(kezdoMacskak)
     
     const kapcsolas = (id: number) => {
          setMacskak(macskak.map(m => m.id === id ? { ...m, baratsagos: !m.baratsagos } : m))
     }
     return(
          <>
          <section>
            <h2>Moderátor felület</h2>

            <div className="row">
              {macskak.map(macska => (
                <article
                  className="col-md-4 mb-3"
                  key={macska.id}
                >
                  <div className="card p-3 shadow">
                    <h3>{macska.nev}</h3>

                    <p>
                      Barátságos:
                      {' '}
                      {macska.baratsagos ? 'Igen' : 'Nem'}
                    </p>

                    <button
                      className="btn btn-outline-primary"
                      onClick={() => kapcsolas(macska.id)}
                    >
                      {macska.baratsagos ? 'Kikapcsolás' : 'Bekapcsolás'}
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>
          </>
     )
}

export default Moderator