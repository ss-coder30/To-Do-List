const express = require('express')
const bodyParser = require('body-parser')
const ejs = require('ejs')
// const ejsLint = require('ejs-Lint')
// module.exports = express.Router;

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

var items = [];
app.get("/", function(req, res){

    var today = new Date();
    var currentDay = today.getDay();
    var day = "";
    // res.send('hello');

    // if(currentDay===0 || currentDay === 6){
    //     // res.sendFile(__dirname + "/weekend.html")
    //     day = "weekend";
    // }
    // else{
    //     // res.sendFile(__dirname + "/weekday.html")
    //     day = "weekday";
    // }

    // if(currentDay === 0){
    //     day = "Sunday";
    // }
    // else if(currentDay === 1){
    //     day = "Monday";
    // }
    // else if(currentDay === 2){
    //     day = "Tuesday";
    // }
    // else if(currentDay === 3){
    //     day = "Wednesday";
    // }
    // else if(currentDay === 4){
    //     day = "Thursday";
    // }
    // else if(currentDay === 5){
    //     day = "Friday";
    // }
    // else {
    //     day = "Saturday";
    // }

    var options = {     // to use instead of multiple if-else/ switch statements
        weekday: "long", 
        day: "numeric", 
        month: 'long',
        year: 'numeric'
    };

    var day = today.toLocaleDateString("en-US", options);

    res.render("index", {kindOfDay: day, newListItems: items});

})

app.post("/", (req, res)=>{
    // res.send("task added");
    item = req.body.listItem;

    items.push(item); // to input many items in the array
    // console.log(item);
    res.redirect("/"); // it will redirect the post request to home route (get method)
})

app.listen(3000, function(){
    console.log("server is running at 3000");
})
