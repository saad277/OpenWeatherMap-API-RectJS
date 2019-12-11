import React from 'react';

import './App.css';
import { Component } from 'react';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';





class App extends Component {


  constructor() {


    super()

    this.state = {

          city:"karachi",
          units:"",
          getname:"",
          clouds:"",
          humidity:"",
          country:""
    }



  }



weather=async (name)=>{

  if(name==null ){

    name=this.state.city;

  }

  const key="6824daaf2fe3d6259320855d17839cae";

  console.log("Weather Api");

  var weatherapi=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${name}&unit=metrices&APPID=6824daaf2fe3d6259320855d17839cae` );


  const response =await weatherapi.json();

  var getcity=response.name;
  var getunits=response.main.temp;
  var clouds=response.clouds.all;
  var humidity=response.main.humidity;
  var country=response.sys.country;

  this.setState({

      city:getcity,
      units:getunits,
      clouds:clouds,
      humidity:humidity,
      country: country

  })


  console.log(response);
  console.log(response.main.temp);
  console.log(response.name);
  console.log(response.clouds.all)
  console.log(response.main.humidity);
  console.log(country)


}

  

  componentDidMount=async ()=>{

    this.weather(this.state.city);


 
  }






  inputhandler=(event)=>{

    const cityname=event.target.value;


    this.setState({

        getname:cityname

    })

    console.log(cityname)

    

  }

set=()=>{

 var a=this.state.getname;

this.setState({

  city:a

})

 this.weather(a);







}




  render() {
    return (

      <div>
      <header className="App-header">

        <h1> Weather Api  </h1>

      


      </header>

<div className="parent">

<div className="weather">

  <h3>         Current Region                    </h3>

      <br/>

<div>       <span > Region </span> : {this.state.city}                     </div>
<div>       <span > Temperature </span> : {this.state.units}                     </div>
<div>       <span > Clouds </span> : {this.state.clouds}                     </div>
<div>       <span > Humidity </span> : {this.state.humidity}                     </div>
<div>       <span > Country </span> : {this.state.country}                     </div>

</div>

<div className="input">

<h3>  Input City         </h3>  

<br/> 
<label>   Enter Region :    </label>
<input type="text" onChange={this.inputhandler} className="field"/>

<br/> <br/>

<Button color="primary" onClick={this.set}>    Get Weather      </Button>

</div>

</div>

</div>

    );


  }
}

export default App;
