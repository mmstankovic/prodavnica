import React from 'react'
import './Proizvod.css'

export default class Proizvod extends React.Component {
    render() {
        const p = this.props.proizvod
        return(
            <div className="Proizvod">
                <h1 className="Proizvod-Title">{p.naziv}</h1>
                <p className="Proizvod-Barkod"><b>Barcode:</b> {p.barcode}</p>
                <p className="Proizvod-Stanje"><b>Stanje:</b> {p.stanje == 0 ? "Nema na stanju": p.stanje}</p>
                <p className="Proizvod-Cena"><b>Cena:</b> {p.cena}</p>
                <div className="Proizvod-Slika">
                    <img src={p.slika} alt={p.naziv + " slika"} />
                </div>
                <div>
                    <button className="Proizvod-Dodaj"
                    disabled={p.stanje === 0}
                    onClick={e => this.props.dodaj_u_korpu(p.barcode)}>Kupi
                    </button>
                </div>
            </div>
        )
    }
}