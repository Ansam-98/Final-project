import react , {Component} from 'react'
import Alert from 'react-bootstrap/Alert'
import axios from 'axios'
import Place from './Place'
import {Row} from 'react-bootstrap'
import PlaceModel from './PlaceModel'




class PlaceAdmin extends Component
    {
        constructor(props)
{
    super(props)
    this.state ={
        Places:[],
        ErrorMsg:''
    }
}
        
        componentDidMount()
{
this.getAllPlaces()
}
        
        
        getAllPlaces = ()=>{
                axios.get('http://localhost:4000/Places').then( res =>{
        console.log(res)
        this.setState({Places:res.data})
    })
    .catch( err => {
        console.log(err)
        this.setState({ErrorMsg:'couldent get data'})
    })
        }
        render()
        {  
            const {Places,ErrorMsg}=this.state
            return(
            <div>
            <div classNameNameNameNameName="row " style={{backgroundColor:"#f0f0c2"}}>
	           <div classNameNameNameNameName="medium-12 columns">
	           
	           <div className="upper-bar">
  <div className="container" > 
  <div className="row">
 
   <nav className="navbar fixed-top repeat" style={{backgroundImage:"url(../images/img_9537.jpg)"}}>
    <div className="col-sm-5">
    <span className="logo text-light">
        <img src="../images/logo.png" height="31" width="23"/>
         Hashemite Kingdom of Jordan
        
    </span>
 
       </div>
       

<div className="col-sm">
   <ul className="nav justify-content-end ">
    <li className="nav-item">
    <a className="nav-link text-light" href="http://localhost:3000/"> Home</a>
  </li>
  <li className="nav-item">
    <a className="nav-link active text-light" href="./contact.html"> Contact Us</a>
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
           
                  <h1 className="newara "  style={{textAlign: "center"}}>Jordanian cities and their classifications:</h1>
                   <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
        <img src="https://149391556.v2.pressablecdn.com/wp-content/uploads/2011/12/calendar-back-jordan.jpg" className="d-block w-100" style={{width: "1200",height:"500"}}/>
    </div>
 
  </div>
</div>
                     
         </div>
            <PlaceModel  getAllPlaces ={this.getAllPlaces} />
             <Row key='defaultrow'>
             {
                Places.length? Places.map(place => <Place key={place._id} ID={place._id} Name={place.name} Description={place.description}  Category={place.categories } Cat={place.cat} getAllPlaces={this.getAllPlaces}   /> )  : <span>Nothing to show</span>    
                 }
                 {
                     ErrorMsg ? <Alert variant="danger">ErrorMsg</Alert> : <div></div>
                 }
              
              </Row>
              

            
      </div></div></div></div>
           
                                <footer>
             <div className="container">
                <div className="row pt-5 m-5">
                <div className="col-lg-4 col-sm-6">
                 <h2 style={{color: "white"}}>Ministry of Tourism & Antiquities</h2><br/>
                 <span>

Activating the role of the tourism industry to highlight Jordan's attractions and to distinguish Jordan as a unique tourism destination, and in appreciation of the role of tourism to national income by generating foreign exchange earnings, and, in recognition of the important role of the private sector in investment and development</span></div>
                 
                 <div className="col-lg-4 col-sm-6">
                  <h2 style={{color: "white"}}>QUICK LINKS</h2><br/>
                     <a href="./Aboutus.html"><h6 className="foo">About Us</h6></a>
                     <a href="./FAQs.html"><h6 className="foo">FAQ Page</h6></a>
                     <a href="./contact.html"><h6 className="foo">Contact us</h6></a>
                     
                     
                     </div>
                     
                     <div className="col-lg-4 col-sm-6">
                 <h2 style={{color: "white"}}>Contact Us</h2><br/>
                 <h6><i className='bx bx-map' style={{color:'#777171',fontSize: '20px'}}></i> <a href="https://www.google.com/maps/dir//31.9532699,35.907527/@31.95327,35.907527,16z?hl=en-US" style={{color: '#909090'}}>3rd circle - Jabal Amman</a></h6>
                 
                 <h6><i className='bx bxs-phone' style={{color:'#777171',fontSize: '20px'}}></i> +962 6 4603360</h6>
                 <h6><i className='bx bxl-facebook-circle' style={{color:'#777171',fontSize: '20px'}}></i>
                 <i className='bx bxl-instagram' style={{color:'#777171',fontSize: '20px'}} ></i>
                 <i className='bx bxl-twitter' style={{color:'#777171',fontSize: '20px'}}></i>
                 </h6>
                 </div>
             </div> 
                
                  </div>        

             </footer>
           
           </div></div>
            )
        }
        
        
        
        
    }



export default PlaceAdmin