import react , {useState} from 'react'
import {Card,Col,Alert,Container } from 'react-bootstrap'
import axios from 'axios'
import PlaceModel from './PlaceModel'




const Place= (props) => {
    
    return (
 
         <> 
       
        <Col xs={6} lg={4} md={6}>
        <Card border="primary"  style={{ width: '19rem' },{backgroundColor: "burlywood"}} className="mt-5 p-3">
  <Card.Body>
    <Card.Title>{props.Name}</Card.Title>
    <Card.Text>
      {props.Description}
      <br/><br/>
      
      <b>Category : </b> {props.Cat}
      
    </Card.Text>
     
    
      <PlaceModel   getAllPlaces={props.getAllPlaces} ID={props.ID} Name={props.Name} Descreption={props.Description}  Categories={props.Category}/>
  </Card.Body>
</Card>
</Col>
        
     </>
    )
}

export default Place