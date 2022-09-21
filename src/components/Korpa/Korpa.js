import React from 'react'
import './Korpa.css'

export default class Korpa extends React.Component {
    render() {
        if(this.props.korpa.length === 0) {
            return(
                <div className="Korpa">
                <p>Vasa korpa je prazna. Dodajte neke proizvode.</p>
                </div>
            )
        }
        
        const proizvodi = this.props.korpa.map(
             item => (<div className="Korpa-Proizvod" key={item.barcode}>
                 <div>{item.naziv}</div>
                 <div className="Korpa-Stanje">
                     <input type="number" value={item.kolicina} readOnly={true}/>
                 </div>
                 <div>{item.cena}</div>
                 <div>{item.cena * item.kolicina} RSD</div>
                 <div>
                     <button onClick={e => this.props.dodaj_u_korpu(item.barcode)}>+</button>
                     <button onClick={e => this.props.ukloni_iz_korpe(item.barcode)}>-</button>
                 </div>
             </div>)
        )

        let ukupna_cena = 0

        this.props.korpa.forEach( item => ukupna_cena += item.cena * item.kolicina)
            
    

        return(
            <div className="Korpa">
                {proizvodi}
            <p>Ukupna cena: {ukupna_cena} RSD</p>
            </div>
        )
    }
}