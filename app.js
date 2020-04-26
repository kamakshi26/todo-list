const express = require("express");
const bodyParser = require("body-parser");
const date=require(__dirname+"/date.js");
console.log(date);
const app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));
app.set('view engine', 'ejs');
var works = ["web dev", "dbms", "oops"];
let todayworks = ["study", "utube", "moveone"];


// handling get requests
app.get('/', function(req, res) {
   let thisday=date.getday();
  res.render('list', {listtitle: thisday,  newValue: works});
});


// handling post requests
app.post('/', function(req, res) {

  var value = req.body.extracurricular;
  if (req.body.listname === "workList") {
    todayworks.push(value);
    res.redirect('/work');
  } else {

    works.push(value);
    res.redirect('/');
  }
});


// handling get requests for work route
app.get('/work', function(req, res) {
  let titlename = "workList";
  res.render('list', {
    listtitle: titlename,
    newValue: todayworks
  });
});


// port listening
app.listen(process.env.PORT || 3000, function() {
  console.log("server running");
})
