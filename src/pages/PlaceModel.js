import react , {Component} from 'react'
import axios from 'axios'
import {Modal,Button,Form,Alert} from 'react-bootstrap'

class PlaceModel extends Component
    {
        constructor(props){
            super(props)
        
            this.state = {showModel:false,Categories:[],
            name:'',
           PlaceId:'',
            Cat : '',              
            
       categories:'',
       description:'',
          
                NameValidationClass:'',
                         NameValidationErr:''}
        }
        
        componentDidMount()
        {
             axios.get('http://localhost:4000/Categories')
            .then(res => this.setState({Categories:res.data}))
            .catch(err => console.log(err))
             
             
             if(this.props.Name){
                 this.setState({name: this.props.Name,
               categories :this.props.Category,
                   cat: this.props.Cat,
                description:this.props.Description,
                PlaceId:this.props.ID})
             }
        }
        
        
render(){
    console.log('hi')
            return (
            <div>{this.Name}</div>)
        }
    }
export default  PlaceModel
        
        