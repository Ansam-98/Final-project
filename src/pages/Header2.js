import react , {useContext} from 'react'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import {Carousel,Navbar,Form,FormControl,Button} from  'react-bootstrap'


const Header2 = (props) => {
    
    
 
    return  (<div>
    
      
          <h1>The most famous restaurants in Jordanian cities:</h1><Carousel>
  <Carousel.Item>
                   
    <img
      className="w-100 width={1200}
    height={050}"
      src="https://cdn.kimkim.com/files/a/content_articles/featured_photos/84cedeccf7ebfcd274c40a9b38f0195c63661f73/big-24a04e28072e0a82a804b398188bba06.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Visit Jordan</h3>
      <p>The most famous restaurants in Jordanian cities</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://149391556.v2.pressablecdn.com/wp-content/uploads/2011/12/calendar-back-jordan.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Visit Jordan</h3>
      <p>The most famous restaurants in Jordanian cities</p>
    </Carousel.Caption>
  </Carousel.Item>

</Carousel>
       <br></br> 

     </div>   
        )
}

export default Header2