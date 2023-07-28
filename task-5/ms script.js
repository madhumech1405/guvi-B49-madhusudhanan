
var json = [{
    "id" : "madhusudhanan j", 
    "msg"   : "(for, for in, for of, forEach)",
    "age" : "28",
    "mail": "madhumech1405@gmail.com"
},
{
    "id" : "madhusudhanan j2", 
    "msg"   : " (for, for in, for of, forEach)",
    "age" : "28",
    "mail": "madhumech1405@gmail.com"
}];
//for loop
for(var i = 0; i < json.length; i++) {
    var obj = json[i];

    console.log(obj.id);
    console.log(obj.msg);
    console.log(obj.age);
    console.log(obj.mail);

}
//for Each
json.forEach(function(obj) { console.log(obj.msg); });

//for In
for (var key in json) {
if (json.hasOwnProperty(key)) {
  console.log(json[key].id);

 
}
}
//for Of
let text = "";
for (let x of json[key].id) {
 text += x; 
}
 console.log(text);




