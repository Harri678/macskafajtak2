import { kezdoMacskak } from "../data/macskak"

function Kezdolap(){

     return(
          <>
          <section>
            <h2>Macskafajták listája</h2>

            <div className="row">
              {kezdoMacskak.map(macska => (
                <article className="col-md-4 mb-3" key={macska.id}>
                  <div className="card p-3 shadow">
                    <h3>{macska.nev}</h3>

                    <p>Származás: {macska.szarmazas}</p>

                    <p>Testsúly: {macska.testsuly} kg</p>

                    <p>
                      Barátságos:
                      {' '}
                      {macska.baratsagos ? 'Igen' : 'Nem'}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>
          </>
     )
}

export default Kezdolap