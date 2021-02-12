import react , {useState} from 'react'
import {Card,Col,Alert,Container } from 'react-bootstrap'
import axios from 'axios'
import ResturantModel from './ResturantModel'




const Resturant= (props) => {
    
    return (
 
         <> 
       
        <Col xs={6} lg={4} md={6}>
        <Card border="primary"  style={{ width: '19rem' },{backgroundColor: "burlywood"}} className="mt-5 p-3">
  <Card.Body>
    <Card.Title>{props.Resturantname}</Card.Title>
    <Card.Text>
      {props.features}
      
      <br/><br/>
      <b>Services : </b> {props.services}
      <br/><br/>
      <b>Location : </b> {props.location}
      
    </Card.Text>
     
    
      <ResturantModel   getAllPlaces={props.getAllPlaces} ID={props.ID} Resturantname={props.Resturantname} features={props.features}  Place={props.places}  Location = {props.location} Services = {props.services}/>
  </Card.Body>
</Card>
</Col>
        
     </>
    )
}

export default Resturant