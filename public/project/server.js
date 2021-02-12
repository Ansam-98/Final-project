const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cookieSession = require("cookie-session");
const User = require("./model/User");
const exphbs = require('express-handlebars');
const path = require('path');
const nodemailer = require('nodemailer');
const email = require("./model/email")

const Form = require("./model/Form");

const authenticateForm = require("./middlewares/authenticateForm");
const authenticateUser = require("./middlewares/authenticateUser");
const bcrypt = require("bcrypt");
const bodyParser = require('body-parser');
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});



const db = mongoose.connect('mongodb://localhost/Sites',{
    useNewUrlParser: true ,
    useUnifiedTopology: true,
        useCreateIndex: true,
    useFindAndModify: false
}) 


app.use(express.static("public"));
app.set("view engine", "ejs");

// cookie session
app.use(
  cookieSession({
    keys: ["randomStringASyoulikehjudfsajk"],
  })
);

let Resturant = require('./model/resturant')
let Hotel = require('./model/hotel')
let Place = require('./model/place')
let Category = require('./model/category')

app.post('/resturant',function(req,res){
    
    let NewResturant = new Resturant()
    
   
    NewResturant. ResturantName = req.body. ResturantName;
   NewResturant.Features = req.body.Features;
    NewResturant.Location= req.body.Location;
    NewResturant.places=req.body.places;
    NewResturant.Services=req.body.Services;
   NewResturant.save(function(err,SavedResturant){
        
        if(err){
            res.status(500).send({error:"Couldn't add Resturant"})
        }
        
        else{
            res.send(SavedResturant)
        }
    })
    
    
    
    
    
})


app.post('/hotel',function(req,res){
    
    let NewHotel = new Hotel()
    
   
    NewHotel.HotelName = req.body.HotelName;
   NewHotel.Phone = req.body.Phone;
    NewHotel.Website= req.body.Website;
   
    
    NewHotel.save(function(err,SavedHotel){
        
        if(err){
            res.status(500).send({error:"Couldn't add Hotel"})
        }
        
        else{
            res.send(SavedHotel)
        }
    })
    
    
    
    
    
})
 


app.post('/Place' , function (req,res){
    let NewPlace = new Place()
    NewPlace.name = req.body.name ;
   NewPlace.description = req.body.description ;
    NewPlace.categories = req.body.categories  ;
    NewPlace.cat = req.body.cat  ;
   
   
    
    NewPlace.save(function(err,SavedPlace){
        if (err) {
            console.log(err)
            res.status(500).send({error:"Coudn't add Place"})
        } else {
            res.send(SavedPlace)
        }
    })
})


app.post('/Category' , function (req,res){
    let NewCategory = new Category()
    NewCategory.Name = req.body.Name ;
    NewCategory.no = req.body.no;
    
    NewCategory.save(function(err,SavedCategory){
        if (err) {
            res.status(500).send({error:"Coudn't add category"})
        } else {
            res.send(SavedCategory)
        }
    })
})



app.get('/Places' , function (req,res){  
  Place.find({}).populate({
    path:'categories',
    model:'Category',
    select:'Name'
}).exec(function(err,places){
    if(err){
        res.status(500).send({error:"couldn't get places"})
    } else{
        res.send(places);
    }
})

})


app.get('/Categories' , function (req,res){ 
    Category.find({} , function(error,Categories){
        if (error){
            res.status(500).send({Error:"Coudn't get Categories "})
        } else {
            
            res.send(Categories);
        }
    })
    
})


app.get('/Resturants' , function (req,res){  
   Resturant.find({},function(error,Resturants){    
        if (error){
            res.status(500).send({Error:"Coudn't get Resturant "})
        } else {
            
            res.send(Resturants);
        }
    }) 
})

app.get('/Hotels' , function (req,res){  
   Hotel.find({},function(error,Hotels){    
        if (error){
            res.status(500).send({Error:"Coudn't get Hotel "})
        } else {
            
            res.send(Hotels);
        }
    }) 
})


app.put('/place/category/add',function(req,res){
    
    let categoryID = req.body.categoryId
    
    let  placeID = req.body.placeId
    
    
    Category.findOne({_id :categoryID },function(err,category){
        if(err){
            res.status(500).send({error:"couldn't add categort"})
        } else{ Place.updateOne({_id : placeID} ,{$addToSet : {categories : category._id}},function(err, status ){
            if(err){
               res.status(500).send({error:"couldn't add place"}) 
            } else{
                res.send(status)
            }
        })
            
        }
    })
})



app.put('/place/resturant/add',function(req,res){
    
    let resturantID = req.body.resturantId
    
    let  placeID = req.body.placeId
    
    
    Place.findOne({_id :placeID},function(err,place){
        if(err){
            res.status(500).send({error:"couldn't add place"})
        } else{ Resturant.updateOne({_id : resturantID} ,{$addToSet : {places: place._id}},function(err, status ){
            if(err){
               res.status(500).send({error:"couldn't add resturant"}) 
            } else{
                res.send(status)
            }
        })
            
        }
    })
})

// route for serving frontend files
app
  .get("/", (req, res) => {
    res.render("index");
  })
  .get("/login", (req, res) => {
    res.render("login");
  })
  .get("/register", (req, res) => {
    res.render("register");
  })

  .get("/home", authenticateUser, (req, res) => {
    res.render("home", { user: req.session.user });
  });

// route for handling post requirests
app
  .post("/login", async (req, res) => {
    const { email, password } = req.body;

    // check for missing filds
    if (!email || !password) {
      res.send("Please enter all the fields");
      return;
    }

    const doesUserExits = await User.findOne({ email });

    if (!doesUserExits) {
      res.send("invalid username or password");
      return;
    }

    const doesPasswordMatch = await bcrypt.compare(
      password,
      doesUserExits.password
    );

    if (!doesPasswordMatch) {
      res.send("invalid useranme or password");
      return;
    }

    // else he\s logged in
    req.session.user = {
      email,
    };

    res.redirect("/home");
  })
  .post("/register", async (req, res) => {
    const { email, password } = req.body;

    // check for missing filds
    if (!email || !password) {
      res.send("Please enter all the fields");
      return;
    }

    const doesUserExitsAlreay = await User.findOne({ email });

    if (doesUserExitsAlreay) {
      res.send("A user with that email already exits please try another one!");
      return;
    }

    // lets hash the password
    const hashedPassword = await bcrypt.hash(password, 12);
    const latestUser = new User({ email, password: hashedPassword });

    latestUser
      .save()
      .then(() => {
        res.send("registered account!");
        return;
      })
      .catch((err) => console.log(err));
  });

//logout
app.get("/logout", authenticateUser, (req, res) => {
  req.session.user = null;
  res.redirect("/login");
});







  

app.listen(4000,function(){
    
    console.log("server is running in port 4000")
})