import React, {Component} from 'react'
import axios from 'axios'

class Faqs extends Component {
    render() {
	    return (
<div classNameNameNameName="row ">
	           <div classNameNameNameName="medium-12 columns">
	           
	          
	          
<div className="upper-bar">
  <div className="container"> 
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
    <a className="nav-link text-light" href="../index.html"> Home</a>
  </li>
  <li className="nav-item">
    <a className="nav-link active text-light" href="./contact.html"> Contact Us</a>
  </li>
 
   <li className="nav-item">
    <a className="nav-link text-light" href="http://localhost:4000/login" target="_blank">Login
</a>
  </li>
  <li className="nav-item">
    <a className="nav-link text-light" href="http://localhost:4000/register">Sign Up
</a>
  </li>
    </ul></div></nav>
    
        <div className="container mt-5 pt-5 col-lg">
        
                   <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
        <img src="../images/w1.png" className="d-block w-100" style={{width: "1200", height:"500"}}/>
        <div className="centered text-light"><span>The most common <br/>questions</span></div>
    </div>
 
  </div>
</div>
                     
         </div>
    
    </div></div>
    
    <div className="container-fluid p-5">
<h2 className="font" style={{fontSize: "3em"}}>FAQs</h2>
<div className="row m-3 ">
<div className="col">
<button className="accordion font">Is Jordan safe to visit?</button>
<div className="panel">
  <p>Jordan is a very safe and stable country. Travelers are able to move around the country freely without extra concern for their safety.</p>
</div></div></div> 
<div className="row m-3 ">
<div className="col">
<button className="accordion font">Do Jordanians speak languages other than Arabic?</button>
<div className="panel">
  <p>Most Jordanians, who live in the cities, speak or understand at least some English words or phrases. Fewer Jordanians can speak French, Italian, Spanish, and German. professionals, who work in the tourism sector, are accustomed to visitors who cannot speak Arabic and they will speak enough English and other languages to fulfill the needs of most travelers.</p>
    </div></div></div>
<div className="row m-3">
<div className="col">
<button className="accordion font">What is the official currency in Jordan?</button>
<div className="panel">
  <p>The currency in Jordan is the Jordanian Dinar. The value of the dinar is effectively fixed at the rate of .71 JD to 1 USD (.91 JD to 1 Euro).</p>
    </div></div></div>
    <div className="row m-3 ">
<div className="col">
<button className="accordion font">Will I be able to exchange dollars, Euros, or other currencies in Jordan?</button>
<div className="panel">
  <p>Changing money is very easy in Jordan, and most major currencies are accepted in cash and travelers cheques. US dollars are the most accepted, followed by UK pounds and euros; you'll get nowhere with Australian or New Zealand dollars. There are no restrictions on bringing dinars into Jordan. It's possible to change dinars back into some foreign currencies in Jordan, but you'll need to show receipts to prove that you changed your currency into dinars at a bank in Jordan. Banks seem to offer slightly better rates than money changers for cash, but the difference is not worth worrying about unless you're going to change a huge amount. Most large hotels will change money (sometimes for guests only) but rates are always lower than those offered by the banks and money changers. There are small branches of major banks at the borders and at the airports.</p>
</div></div></div> 
<div className="row m-3 ">
<div className="col">
<button className="accordion font">Do I have to learn Arabic in order to enjoy my visit to Jordan?</button>
<div className="panel">
  <p>It is always good to learn a few Arabic words to expressing greetings or thanks. If you are planning to visit some places other than popular tourist destinations, it is advisable to learn some Arabic phrases.</p>
    </div></div></div>
<div className="row m-3">
<div className="col">
<button className="accordion font">Can I take pictures while visiting the monuments in Jordan?</button>
<div className="panel">
  <p>Photography is allowed in most of the historical sites and museums in Jordan, but some of them have extra charges for taking in a camera. in some museums and some historical sites, photography is prohibited and visitors are asked to leave their cameras at the reception before entering.</p>
    </div></div></div>
    
    <div className="row m-3">
<div className="col">
<button className="accordion font">What is the best way to get around while in Jordan?</button>
<div className="panel">
  <p>The easiest way to get around in Jordan is to use the plentiful taxis. Most taxis have meters if you are in Amman you can depend on this. A 10 KM trip should be around 2 JD on the meter. Outside of Amman it may be necessary to negotiate a price before you leave. It is also possible to arrange with one driver to use them for a whole day.</p>
    </div></div></div>
    </div></div>
    
    
    
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
                 
                   );
             }
             }
             export default Faqs