import React, {Component} from 'react'
import axios from 'axios'
  import {Link } from "react-router-dom";
class Home extends Component {
    render() {
	    return (
		<div classNameName="row ">
	           <div classNameName="medium-12 columns">
                  
                  <div className="upper-bar">
  <div className="container"> 
  <div className="row">
 
   <nav className="navbar fixed-top" style={{backgroundImage:'url(images/img_9537.jpg)'}}>
    <div className="col-sm-5">
    <span className="logo text-light">
        <img src="images/logo.png" height="31" width="23"/>
         Hashemite Kingdom of Jordan
        
    </span>
 
       </div>
       

<div className="col-sm">
   <ul className="nav justify-content-end ">
    <li className="nav-item">
    
    <Link className="nav-link text-light" to="/Home"> Home</Link>
  </li>
  <li className="nav-item">
    <a className="nav-link active text-light" href="./Pages/contact.html"> Contact Us</a>
  </li>
 
  <li className="nav-item">
    <a className="nav-link text-light" href="http://localhost:4000/login" target="_self">Login
</a>
  </li>
  <li className="nav-item">
    <a className="nav-link text-light" href="http://localhost:4000/register" target="_self">Sign Up
</a>
  </li>
  
  
</ul></div></nav>
  
  
   <div className="container mt-5 pt-5 col-lg">
   <nav className="navbar navbar-expand-lg navbar-light bg-white">
  <div className=""></div>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse nav alighn-center" id="navbarSupportedContent">
  <i className='bx bxl-twitter p-2'></i>
   <i className='bx bxl-facebook-circle p-2'></i>
   <i className='bx bxl-instagram-alt p-2'></i>
    <ul className="navbar-nav mx-auto" style={{width: "200px"}}>
       <li className="nav-item dropdown p-2 ">
        <a className="nav-link dropdown-toggle text-dark" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         About the Ministry
        </a>
         <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="./Pages/Aboutus.html">ABOUT US</a>
         
          
        </div>
      </li>
       <li className="nav-item dropdown p-2">
        <a className="nav-link dropdown-toggle text-dark" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         PAGES
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="./Pages/contact.html">CONTACT US</a>
          <a className="dropdown-item" href="./Pages/FAQs.html">FAQ Page</a>
          
        </div>
      </li>
      <li className="nav-item dropdown p-2">
        <a className="nav-link dropdown-toggle text-dark" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         Visit Jordan
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link className="dropdown-item" to="/Amman">Amman</Link>
          <Link className="dropdown-item" to="/Jerash">JERASH</Link>
          <Link className="dropdown-item" to="/Madaba">MADABA</Link>
          <Link className="dropdown-item" to="/Ajlun">AJLOUN</Link>
          <Link className="dropdown-item" to="/Salt">AS-SALT</Link>
          <Link className="dropdown-item" to="/Karak">KERAK</Link>
          <Link className="dropdown-item" to="/Aqaba">AQABA</Link>
          <Link className="dropdown-item" to="/Deadsea">DEAD SEA</Link>
          <Link className="dropdown-item" to="/Wadirum">WADI RUM</Link>
          <Link className="dropdown-item" to="/Petra">PETRA</Link>
          
        </div>
      </li>
    
    </ul>
    <div> 
    <img src="images/main-logo.png"/>
    <span> </span>
    </div>
  </div>
</nav></div>

   

    </div>
    
     
    
    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="images/jerash.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="images/petra-2.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="images/deadsea2.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="images/wadi-rum.jpg" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
    </div>
    
    

<div className="container">
    <div className="row p-5">
        <div className="col-sm-6 col-lg-12 col-md-6">
          <div className="divhome">
              <h1 className="newara">Tourism and tourist sites in Jordan</h1></div>
           <form className="form1 mt-5">
            <h2 className="newara centered mt-2">Visit Jordan</h2>
            <span>

From the haunting, primeval starkness of Wadi Rum, to the teeming centre of urban Amman, from the majestic ruins of bygone civilizations to the timeless splendour of the Dead Sea, Jordan is unveiled as a unique destination offering breathtaking and mysterious sights, high standard accommodations, exquisite cuisine and countless activities.</span>
       </form> </div>
        
    </div>
    
</div>
   
     <div className="divhome">
   
    <div className="contanier ">
       <h4 className="homeD"> Tourist sites</h4>
       <h2 className="newara jdc"><span className="word">Jordanian</span> <span className="word">cities</span></h2>
      
       <div className="container form1">
           <div className="row m-5">
               <div className="col-lg-4 ">
                 <a href="#">
                  <img className="categorise" src="images/amman.jpg" alt="Image" /></a>
                  
                  <Link to="/Amman" target="_self" className="btn btn-lg active btncolor m-2" role="button" aria-pressed="true">AMMAN</Link>
                   
               </div>
               <div className="col-lg-4 "><a href="#">
                   <img className="categorise" src="images/jerash1.jpg" alt="Image" /></a>
                   
                    <Link to="/Jerash" className="btn btn-lg active btncolor m-2" role="button" aria-pressed="true">JERASH</Link>
               </div>
               <div className="col-lg-4"><a href="#">
                   <img className="categorise" src="images/madaba.jpg" alt="Image" /></a>
                    <Link to="/Madaba" className="btn btn-lg active btncolor m-2" role="button" aria-pressed="true">MADABA</Link>
               </div>
           </div>
           <div className="row m-5">
              
               <div className="col-lg-4 "><a href="#">
                   <img className="categorise" src="images/ajlon.jpg" alt="Image" /></a>
                  <Link to="/Ajlun" className="btn btn-lg active btncolor m-2" role="button" aria-pressed="true">AJLOUN</Link>
                   
               </div>
               <div className="col-lg-4"><a href="#">
                   <img className="categorise" src="images/salt55.jpg" alt="Image" /></a>
                  <Link to="/Salt" target="_self" className="btn btn-lg active btncolor m-2" role="button" aria-pressed="true">AS-SALT</Link>
                   
               </div>
               <div className="col-lg-4 "><a href="#">
                   <img className="categorise" src="images/karak.jpg" alt="Image" /></a>
                  <Link to="/Karak" className="btn btn-lg active btncolor m-2" role="button" aria-pressed="true">AL-KARAK</Link>
                   
               </div>
               
           </div>
           
                      <div className="row m-5">
              
               <div className="col-lg-4 "><a href="#">
                   <img className="categorise" src="images/aqaba.jpg" alt="Image" /></a>
                  <Link to="/Aqaba" className="btn btn-lg active btncolor m-2" role="button" aria-pressed="true">AQABA</Link>
                   
               </div>
               <div className="col-lg-4 "><a href="#">
                   <img className="categorise" src="images/dead.png" alt="Image" /></a>
                  <Link to="/Deadsea" className="btn btn-lg active btncolor m-2" role="button" aria-pressed="true">DED SEA</Link>
                   
               </div>
               <div className="col-lg-4 "><a href="#">
                   <img className="categorise" src="images/rum.png" alt="Image" /></a>
                  <Link to="/Wadirum" className="btn btn-lg active btncolor m-2" role="button" aria-pressed="true">WADI RUM</Link>
                   
               </div>
               
           </div>
           
           
           <div className="row m-5">
               <div className="col-lg-4"><a href="#">
                   <img className="categorise" src="images/petra.jpg" alt="Image" /></a>
                  <Link to="/Petra" className="btn btn-lg active btncolor m-2" role="button" aria-pressed="true">Petra</Link>
                   
               </div>
               
           </div>
       </div>
        
        
    </div></div>
    
    
     
   <div className="divhome">
   
    <div className="contanier ">
       <h1 className="newara jdc"><span className="word">WHAT</span><span className="word">WE</span><span className="word">DO</span> </h1>
       
   
       <div className="contanier whatwedo">
           <form className="form1">
            <div className="row m-5">
               <div className="col-sm-6 col-md-6">
                   
                   <Link to="/PlaceAdmin" style={{color:"black"}}> <h4><i className='bx bxs-map' style={{color:"#226a71",fontSize: "36px "}} ></i>Tourist sites and their classNameifications</h4></Link>
                   
              <span>On this page there are all the tourist sites in Jordan and the classNameification of each site, such as whether it is an archaeological site, a tourist or a religious site</span>
                
            </div>
            <div className="col-sm-6 col-md-6">
                <Link to="/ResturantAdmin"  style={{color:"black"}}><h4><i className='bx bxs-arch m-2' style={{color:"#226a71",fontSize: "36px" }}  ></i>The famous Jordanian restaurants in Jordan</h4></Link>
                   
              <span>On this page there are all the famous restaurants in all cities of the Kingdom in addition to details of these restaurants</span>
                
            </div>
            
            
            </div></form>
            
       
            
        </div>
        
    </div></div>
      
      <div className="divhome">
   
    <div className="contanier ">
       <h4 className="homeD">Tourist sites</h4>
       <h2 className="newara">Gallary</h2>
       
        
        <div className="contanier form1 ">
            <div className="row m-3">
                <div className="col-sm-6 col-md-3 ">
                <img  className="dec" src="images/11.jpg"/></div>
                
                <div className="col-sm-6 col-md-3">
                <img  className="dec" src="images/12.jpg"/></div>
                
                <div className="col-sm-6 col-md-3">
                <img  className="dec" src="images/13.jpg"/></div>
                  <div className="col-sm-6 col-md-3">
                <img  className="dec" src="images/14.jpg"/></div> 
                
               
            </div>
        
            
            <div className="row m-3">
                <div className="col-sm-6 col-md-3">
                <img  className="dec" src="images/15.jpg"/></div>
            
                
                
                <div className="col-sm-6 col-md-3">
                <img  className="dec" src="images/16.jpg"/></div>
                
                <div className="col-sm-6 col-md-3">
                <img  className="dec" src="images/17.jpg"/></div>
                
                <div className="col-sm-6 col-md-3">
                <img  className="dec" src="images/18.jpg"/></div>
            </div>
            
        </div>
        
    </div></div>
   
    <footer>
             <div className="container">
                <div className="row pt-5 m-5">
                <div className="col-lg-4 col-sm-6">
                 <h2 style={{color: "white"}}>Ministry of Tourism & Antiquities</h2><br/>
                 <span>Activating the role of the tourism industry to highlight Jordan's attractions and to distinguish Jordan as a unique tourism destination, and in appreciation of the role of tourism to national income by generating foreign exchange earnings, and, in recognition of the important role of the private sector in investment and development</span></div>
                 
                 <div className="col-lg-4 col-sm-6">
                  <h2 style={{color: "white"}}>QUICK LINKS</h2><br/>
                     <a href="./Pages/Aboutus.html"><h6 className="foo">About Us</h6></a>
                     <a href="./Pages/FAQs.html"><h6 className="foo">FAQ Page</h6></a>
                     <a href="./Pages/contact.html"><h6 className="foo">Contact us</h6></a>
                     
                     
                     </div>
                     
                    <div className="col-lg-4 col-sm-6">
                 <h2 style={{color: "white"}}>Contact Us</h2><br/>
                 <h6><i className='bx bx-map' style={{color:'#777171',fontSize: '20px'}}></i> <a href="https://www.google.com/maps/dir//31.9532699,35.907527/@31.95327,35.907527,16z?hl=en-US" style={{color: "#909090"}}>3rd circle - Jabal Amman</a></h6>
                 
                 <h6><i className='bx bxs-phone' style={{color:'#777171',fontSize: '20px'}}></i> +962 6 4603360</h6>
                 <h6><i className='bx bxl-facebook-circle' style={{color:'#777171',fontSize: '20px'}}></i>
                 <i className='bx bxl-instagram' style={{color:'#777171',fontSize: '20px'}} ></i>
                 <i className='bx bxl-twitter' style={{color:'#777171',fontSize: '20px'}}></i>
                 </h6>
                 </div>
             </div> 
                
                  </div>        

             </footer>
             
         
         
                  
                  
                   </div>
                </div>  </div>
	     );
    }
}
export default Home
