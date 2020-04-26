console.log(module);
exports.getdate=function(){
var day = new Date();
var options = {
  weekday: "long",
  month: "long",
  day: "numeric"
};

var thisday = day.toLocaleDateString("en-US", options);
return thisday;

}
exports.getday=function()
{

var day = new Date();
var options = {
  month: "long",
  day: "numeric"
};

var thisday = day.toLocaleDateString("en-US", options);
return thisday;

}
