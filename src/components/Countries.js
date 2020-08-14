import React ,{Component} from "react";
import CustomCard from './CustomCard';

class Countries extends Component {

    constructor(){
        super ()
        this.state = {
            countryName:"",
            regionName:"",
            allCountries:[]

        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    componentDidMount() {
        fetch("https://restcountries.eu/rest/v2/all")
        .then(response => response.json())
        .then(response => {
            this.setState( {allCountries: response} )
            console.log(this.state.allCountries)
            
        })
        
    }

    handleChange(event){
        event.preventDefault()
        const countryName = event.target.value
        if(event.target.value ==""){

        }
        else{
            fetch("https://restcountries.eu/rest/v2/name/" + countryName)
            .then(response => response.json())
            .then(response => {
                this.setState( {allCountries: response} )
                console.log(this.state.allCountries)
                
            })
            .catch(
                error => console.log(error),
                this.setState({ allCountries: []})
            )
        }
    }

    handleSubmit(event){
        event.preventDefault()
        //const countryName = event.target.countryName.value
        const regionName = event.target.regions.value
        //this.setState({ countryName: countryName, regionName: regionName})
        //console.log(countryName)
        console.log(regionName)
        fetch("https://restcountries.eu/rest/v2/region/" + regionName)
        .then(response => response.json())
        .then(response => {
            this.setState( {allCountries: response} )
            console.log(this.state.allCountries)
            
        })
        .catch(
            error => console.log(error),
            this.setState({ allCountries: []})
        )
        
    }

    render() {
        
            return( 
                <div>    
                <h1>World Countries</h1>    
                    <form onSubmit={this.handleSubmit} >
                
                        <input name="countryName" type="text" 
                            placeholder="Country name"  onChange ={this.handleChange} />   
                        <br></br>
                        <select id="region" name="regions">
                            <option value="">All</option>
                            <option value="Americas">Americas</option>
                            <option value="Africa">Africa</option>
                            <option value="Asia">Asia</option>
                            <option value="Europe">Europe</option>
                            <option value="Oceania">Oceania</option>
                        </select>
                        <br></br>
                        <button>Submit </button>
                    
                    </form>
                    <div style={{display: "block" }}>
                        <div style={{margin: "auto",display: "flex" , flexWrap:"wrap" , justifyContent:"center"}}>
                                
                                {
                                    
                                    this.state.allCountries.map( country => {
                                    
                                        return <CustomCard 
                                            name={country.name}  
                                            flag={country.flag} 
                                            population={country.population}
                                            capital={country.capital}
                                            currency={country.currency}
                                            region={country.region}
                                            /> })
                                    
                              } 
                        </div>
                    </div>
                </div>
        )
               
                            
    }
}


export default Countries