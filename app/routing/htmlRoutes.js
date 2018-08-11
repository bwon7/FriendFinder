//A GET Route to /survey which should display the survey page.
//A default, catch-all route that leads to home.html which displays the home page.

var Path = require("path");


module.exports =function(app){
app.get("/", function(req, res){
    res.sendFile(Path.join(__dirname,"../public/home.html"));
});

app.get("/survey", function(req,res){
    res.sendFile(Path.join(__dirname,"../public/survey.html"));
});

};