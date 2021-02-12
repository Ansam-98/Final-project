import react , {Component} from 'react'
import axios from 'axios'
import {Modal,Button,Form,Alert} from 'react-bootstrap'

class ResturantModel extends Component
    {
        constructor(props){
            super(props)
        
            this.state = {showModel:false,Plases:[],
            ResturantName:'',
           Features:'',
            Location : '',              
            Services:'',
       places:'',
      
          
                NameValidationClass:'',
                         NameValidationErr:''}
        }
        
        componentDidMount()
        {
             axios.get('http://localhost:4000/Places')
            .then(res => this.setState({Places:res.data}))
            .catch(err => console.log(err))
             
             
             if(this.props.Resturantname){
                 this.setState({ResturantName: this.props.Resturantname,
               Features :this.props.features,
                    Location: this.props. location,
                                Services:this.props.services,
                places:this.props.Place,
                PlaceId:this.props.ID})
             }
        }
        
        
render(){
    console.log('hi')
            return (
            <div>{this.Name}</div>)
        }
    }
export default  ResturantModel
        
        