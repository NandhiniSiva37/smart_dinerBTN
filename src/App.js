import React,{Component} from 'react';
import Particles from 'react-particles-js';
import Logo from './Components/Logo/Logo';
import Button from './Components/Button/Button';
import SignIn from "./Components/SignIn/SignIn";
import './App.css';
import 'tachyons';


const particlesOptions={
  particles: {
    number:{
      value:800,
      density:{
        enable:true,
        value_area:1000
      },
    onhover:{
      enable:true,
      mode: 'repulse'
    },

    }
  }
 
};



class App extends Component {
  constructor(){
    super();
    this.state={
      route:'home',
      press:'SignIn',
      email:'',
      password:0,
      error:''
    }
  }



  onRouteChange = () => {
    const {
      email,
      password,}=this.state;
      if (!email||!password)
        { 
          this.setState({route:'home'});
             alert("field is full");
            
        }     
      else{
        
        }
  
    
  }
  
  onPressChange = () => {
    this.setState({route:'SignIn'});
  }

  render() {
            return (         
          <div className="App">
              <Particles className="particles" params={{particlesOptions}} />
              { this.state.route === 'home'
              ? <div>
                <Logo/>
                
                <Button onPressChange={this.onPressChange}/>
              </div>
                 : 
                 <SignIn onRouteChange={this.onRouteChange}
                 validateForm={this.validateForm}/>
                  
                }
          </div> 
        )
      }
}



export default App;
