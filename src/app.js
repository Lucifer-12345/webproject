const express = require("express");
const path = require("path");
const hbs = require('hbs');
const app = express();
const port = process.env.PORT || 3000;

//public static oath
const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");
app.set('view engine', 'hbs');
app.set('views', template_path);
hbs.registerPartials(partials_path);

app.use(express.static(static_path));


//routing
app.get("" , (req, res) => {
    res.render('index')
});

app.get("/about" , (req, res) => {
    res.render('about')
});

app.get("/weather" , (req, res) => {
    res.render('weather')
});

app.get("/*" , (req, res) => {
    res.render('404', {
        errorMsg: 'Opps! Page Not Found'
    })
});

app.listen(port, () =>{
    console.log(`listing to the port at ${port}`)
});


//https://api.openweathermap.org/data/2.5/weather?q=${req.query.name}&appid=aac962f1c444d5122acb5e672823d1cc
