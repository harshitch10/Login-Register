var users=[];
var userid=1;
var reg= document.getElementById("regis");



var arr= JSON.parse(localStorage.getItem("1"));
for(var i=0;i<arr.length;i++)
{
users.push(arr[i]);
userid=arr[i].id+1;
}

reg.addEventListener("click",function(event)
{
 makeobject();
 userid++;
});


function makeobject()
{
    var user= new Object();
    user.id = userid;
    user.name= document.getElementById("rname").value;
    user.mail= document.getElementById("rmail").value;
    user.pass= document.getElementById("rpass").value;
    user.phone= document.getElementById("rphone").value;
    users.push(user);



    localStorage.setItem('1',JSON.stringify(users));

    console.log(users);

}
