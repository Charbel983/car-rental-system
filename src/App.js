import React, { Component } from 'react';
import './App.css';
import Car , {landCruiserSlides, rs3Slides, brzSlides, golfSlides, mercedesSlides, jaguarSlides, 
  giuliaSlides, z4Slides, ghibliSlides, corvetteSlides, camaroSlides, corollaSlides} from './Car/Car';

class App extends Component {

  state = {
    showCars: false,
    buttonText: 'Load More',
    RS3rentals : [
      {rent: null, text: 'Show'}
    ],
    LandCruiserRentals : [
      {rent: null, text: 'Show'}
    ],
    BRZRentals : [
      {rent: null, text:'Show'}
    ],
    GolfRentals: [
      {rent: null, text: 'Show'}
    ],
    MercedesRentals: [
      {rent: null, text: 'Show'}
    ],
    JaguarRentals: [
      {rent: null, text: 'Show'}
    ],
    GiuliaRentals:  [
      {rent: null, text:'Show'}
    ],
    Z4Rentals : [
      {rent: null, text: 'Show'}
    ],
    GhibliRentals : [
      {rent: null, text: 'Show'}
    ],
    CorvetteRentals : [
      {rent: null, text: 'Show'}
    ],
    CamaroRentals : [
      {rent: null, text: 'Show'}
    ],
    CorollaRentals : [
      {rent: null, text: 'Show'}
    ]
  }

  render() {

    const styles = {
      backgroundColor : '#27304d',
      color: 'white',
      borderRadius: '5px',
      cursor: 'pointer'
    };


    const toggleRentRS3Handler = () => {
      let rentsRS3 = this.state.RS3rentals[0].rent;
      if(rentsRS3 === null){
        this.setState({RS3rentals: [
          {rent: 9, text: 'Hide'}
        ]})
      }
      
      else this.setState({RS3rentals : [
        {rent: null, text: 'Show'}
      ]})
    }
    
    const toggleRentLandCruiserHandler = () => {
      let rentsLandCruiser = this.state.LandCruiserRentals[0].rent;
      if(rentsLandCruiser === null){
        this.setState({LandCruiserRentals : [
          {rent: 5, text: 'Hide'}
        ]})
      }
      else this.setState({LandCruiserRentals : [
          {rent: null, text: 'Show'}
        ]})
    }

    const toggleRentBRZHandler = () => {
      let rentsBRZ = this.state.BRZRentals[0].rent;
      if(rentsBRZ === null){
        this.setState({BRZRentals : [
          {rent: 11, text: 'Hide'}
        ]})
      }
      else this.setState({BRZRentals : [
          {rent: null, text: 'Show'}
        ]})
    }

    const toggleRentGolfHandler = () => {
      let rentsGolf = this.state.GolfRentals[0].rent;
      if(rentsGolf === null){
        this.setState({GolfRentals: [
          {rent: 18, text: 'Hide'}
        ]})
      }
      
      else this.setState({GolfRentals : [
        {rent: null, text: 'Show'}
      ]})
    }

    const toggleRentMercedesHandler = () => {
      let rentsMercedes = this.state.MercedesRentals[0].rent;
      if(rentsMercedes === null){
        this.setState({MercedesRentals: [
          {rent: 9, text: 'Hide'}
        ]})
      }
      
      else this.setState({MercedesRentals : [
        {rent: null, text: 'Show'}
      ]})
    }

    const toggleRentJaguarHandler = () => {
      let rentsJaguar = this.state.JaguarRentals[0].rent;
      if(rentsJaguar === null){
        this.setState({JaguarRentals: [
          {rent: 2, text: 'Hide'}
        ]})
      }
      
      else this.setState({JaguarRentals : [
        {rent: null, text: 'Show'}
      ]})
    }

    const toggleRentGiuliaHandler = () => {
      let rentsGiulia = this.state.GiuliaRentals[0].rent;
      if(rentsGiulia === null){
        this.setState({GiuliaRentals: [
          {rent: 4, text: 'Hide'}
        ]})
      }
      
      else this.setState({GiuliaRentals : [
        {rent: null, text: 'Show'}
      ]})
    }

    const toggleRentZ4Handler = () => {
      let rentsZ4 = this.state.Z4Rentals[0].rent;
      if(rentsZ4 === null){
        this.setState({Z4Rentals: [
          {rent: 3, text: 'Hide'}
        ]})
      }
      
      else this.setState({Z4Rentals : [
        {rent: null, text: 'Show'}
      ]})
    }

    const toggleRentGhibliHandler = () => {
      let rentsGhibli = this.state.GhibliRentals[0].rent;
      if(rentsGhibli === null){
        this.setState({GhibliRentals: [
          {rent: 6, text: 'Hide'}
        ]})
      }
      
      else this.setState({GhibliRentals : [
        {rent: null, text: 'Show'}
      ]})
    }

    const toggleRentCorvetteHandler = () => {
      let rentsCorvette = this.state.CorvetteRentals[0].rent;
      if(rentsCorvette === null){
        this.setState({CorvetteRentals: [
          {rent: 2, text: 'Hide'}
        ]})
      }
      
      else this.setState({CorvetteRentals : [
        {rent: null, text: 'Show'}
      ]})
    }

    const toggleRentCamaroHandler = () => {
      let rentsCamaro = this.state.CamaroRentals[0].rent;
      if(rentsCamaro === null){
        this.setState({CamaroRentals: [
          {rent: 7, text: 'Hide'}
        ]})
      }
      
      else this.setState({CamaroRentals : [
        {rent: null, text: 'Show'}
      ]})
    }

    const toggleRentCorollaHandler = () => {
      let rentsCorolla = this.state.CorollaRentals[0].rent;
      if(rentsCorolla === null){
        this.setState({CorollaRentals: [
          {rent: 18, text: 'Hide'}
        ]})
      }
      
      else this.setState({CorollaRentals : [
        {rent: null, text: 'Show'}
      ]})
    }
    
    let cars = null;
    if(this.state.showCars){
      cars =  [
        <table>
          <tbody>
            <td>
                <Car carName="Volkswagen Golf 6" type="Hatchback" model="2011" description="1.6L 102hp" text={this.state.GolfRentals[0].text} styling={styles} slides={golfSlides} toggle={toggleRentGolfHandler} rent={this.state.GolfRentals[0].rent} />,
            </td><td>
                <Car carName="Mercedes E300 AMG" type="Coupe" model="2018" description="2.0L 241hp" text={this.state.MercedesRentals[0].text} styling={styles} slides={mercedesSlides} toggle={toggleRentMercedesHandler} rent={this.state.MercedesRentals[0].rent} />
            </td><td>
                <Car carName="Jaguar F-Type" type="Coupe" model="2016" description="3.0L 340hp" text={this.state.JaguarRentals[0].text} styling={styles} slides={jaguarSlides} toggle={toggleRentJaguarHandler} rent={this.state.JaguarRentals[0].rent} />
            </td>
          </tbody><tbody>
            <td>
              <Car carName="Alfa Romeo Giulia" type="Sport" model="2021" description="2.9L 505hp" text={this.state.GiuliaRentals[0].text} styling={styles} slides={giuliaSlides} toggle={toggleRentGiuliaHandler} rent={this.state.GiuliaRentals[0].rent} />
            </td><td>
              <Car carName="BMW Z4" type="Sport" model="2019" description="3.0L 382hp" text={this.state.Z4Rentals[0].text} styling={styles} slides={z4Slides} toggle={toggleRentZ4Handler} rent={this.state.Z4Rentals[0].rent} />
            </td><td>
              <Car carName="Maserati Ghibli" type="Sedan" model="2017" description="3.0L 345hp" text={this.state.GhibliRentals[0].text} styling={styles} slides={ghibliSlides} toggle={toggleRentGhibliHandler} rent={this.state.GhibliRentals[0].rent} />
            </td>
          </tbody><tbody>
            <td>
              <Car carName="Chevrolet Corvette" type="Sport" model="2018" description="6.2L 455hp" text={this.state.CorvetteRentals[0].text} styling={styles} slides={corvetteSlides} toggle={toggleRentCorvetteHandler} rent={this.state.CorvetteRentals[0].rent} />
            </td><td>
              <Car carName="Chevrolet Camaro ZL1" type="Muscle" model="2017" description="6.2L 640hp" text={this.state.CamaroRentals[0].text} styling={styles} slides={camaroSlides} toggle={toggleRentCamaroHandler} rent={this.state.CamaroRentals[0].rent} />
            </td><td>
              <Car carName="Toyota Corolla S" type="Sedan" model="2004" description="1.8L 148hp" text={this.state.CorollaRentals[0].text} styling={styles} slides={corollaSlides} toggle={toggleRentCorollaHandler} rent={this.state.CorollaRentals[0].rent} />
            </td>
          </tbody>
        </table>
      ];
    }
    else cars = null;

    const toggleCars = () => {
      const show = this.state.showCars;
      if(!show){
        this.setState({
          showCars: !show,
          buttonText: 'Hide'
        })
      }
      else{
        this.setState({
          showCars: !show,
          buttonText: 'Load More'
        })
      }
    }


    return (
      <div className="App">
        <h1>Cars Rental System</h1>
        <div className="container">
          <table>
            <tbody>
                <td><Car carName="Audi RS3 Sportback" type="Sport" model="2018" description="2.5L 400hp" text={this.state.RS3rentals[0].text} styling={styles} slides={rs3Slides} toggle={toggleRentRS3Handler} rent={this.state.RS3rentals[0].rent}/>
                </td><td>
                  <Car carName="Toyota Land Cruiser" type="SUV" model="2020" description="5.7L 381hp" text={this.state.LandCruiserRentals[0].text} styling={styles} slides={landCruiserSlides} toggle={toggleRentLandCruiserHandler} rent={this.state.LandCruiserRentals[0].rent} />
                </td><td>
                  <Car carName="Subaru BRZ" type="Coupe" model="2020" description="2.4L 228hp" text={this.state.BRZRentals[0].text} styling={styles} slides={brzSlides} toggle={toggleRentBRZHandler} rent={this.state.BRZRentals[0].rent} />
                </td>
            </tbody>
          </table>
          {cars}
          <button className="buttonLoad" onClick={toggleCars}>{this.state.buttonText}</button>
        </div>
      </div>
    );
  }
}

export default App;
