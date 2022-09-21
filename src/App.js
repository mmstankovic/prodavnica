import React from 'react'
import Proizvod from './components/Proizvod/Proizvod'
import Korpa from './components/Korpa/Korpa'

export default class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            korpa: [],
            proizvodi: [
                {barcode: "8001841785738", naziv: "Deterdžent za posuđe FAIRY bergamot & ginger 650ml", slika: "p1.jpg", cena: 179.99, stanje: 4},
                {barcode: "8001090208811", naziv: "LENOR Moonlight Harmony 33 pranja (1,9l)", slika: "p2.jpg", cena: 329.99, stanje: 0},
                {barcode: "8606108011461", naziv: "Tortilla MEXICANA Fit 390g", slika: "p4.jpg", cena: 215.99, stanje: 3},
                {barcode: "7622210176004", naziv: "Instant kafa JACOBS Crema gold 200g", slika: "p3.jpg", cena: 659.99, stanje: 7}
            ]

        }

        this.dodaj_u_korpu = this.dodaj_u_korpu.bind(this)
        this.ukloni_iz_korpe = this.ukloni_iz_korpe.bind(this)
    }

    dodaj_u_korpu(barcode) { 
        const korpa = this.state.korpa
        const proizvodi = this.state.proizvodi
        let index_proizvod = -1 
        for(let i = 0; i < proizvodi.length; i++) { 
            if(proizvodi[i].barcode === barcode) {
                index_proizvod = i
                break 
            }
        }
        
        let index_korpa = -1
        for(let i = 0; i < korpa.length; i++) {
            if(korpa[i].barcode === proizvodi[index_proizvod].barcode) {
                index_korpa = i
                break
            }
        }
        if(proizvodi[index_proizvod].stanje > 0) {
            if(index_korpa === -1) {
                let proizvod = proizvodi[index_proizvod]
                proizvod.kolicina = 1 
                korpa.push(proizvod)
            } else {
                korpa[index_korpa].kolicina++
            }
            proizvodi[index_proizvod].stanje--

            this.setState({ korpa: korpa, proizvodi: proizvodi })
        }

    }

    ukloni_iz_korpe(barcode) {
        const korpa = this.state.korpa
        const proizvodi = this.state.proizvodi
        let index_proizvod = -1 
        for(let i = 0; i < proizvodi.length; i++) {
            if(proizvodi[i].barcode === barcode) {
                index_proizvod = i
                break 
                
            }
        }
    
        let index_korpa = -1
        for(let i = 0; i < korpa.length; i++) {
            if(korpa[i].barcode === proizvodi[index_proizvod].barcode) {
                index_korpa = i
                break
            }
        }

        if(index_korpa !== -1) { 
            korpa[index_korpa].kolicina--
            proizvodi[index_proizvod].stanje++

            if(korpa[index_korpa].kolicina === 0) {
                korpa.splice(index_korpa, 1)
            }
            this.setState({korpa: korpa, proizvodi: proizvodi})
        }
       
    }


    render() {
        const proizvodi = this.state.proizvodi.map( p => (<Proizvod key={p.barcode} proizvod={p}
            dodaj_u_korpu={this.dodaj_u_korpu} />))
        return(
            <div className="Prodavnica">
            <Korpa korpa={this.state.korpa}
            dodaj_u_korpu={this.dodaj_u_korpu}
            ukloni_iz_korpe={this.ukloni_iz_korpe} />
            {proizvodi}
            </div>
        )
    }
}