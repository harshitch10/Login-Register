//
//   function addObj()
//   {
//     var obj=new Object();
//     var arr = [];
//     obj.id=userid;
//     obj.name=document.getElementById("name").value;
//     obj.email=document.getElementById("email").value;
//     obj.phone=document.getElementById("pnum").value;
//     obj.password=document.getElementById("psw").value;
//     arr.push(obj);
//     localStorage.setItem("key",JSON.stringify(arr));
//     console.log(arr);
// }

var users=[];
var userid=1;
var reg= document.getElementById("reg");
var arr= JSON.parse(localStorage.getItem("1"));
if(arr!=null)
{
for(var i=0;i<arr.length;i++)
{
users.push(arr[i]);
userid=arr[i].id+1;
}
}
if(reg!=null)
{
reg.addEventListener("click",function(event)
{
 makeobject();
 userid++;
});
}
function makeobject()
{
    var user= new Object();
    user.id = userid;
    user.name= document.getElementById("name").value;
    user.mail= document.getElementById("email").value;
    user.pass= document.getElementById("psw").value;
    user.phone= document.getElementById("pnum").value;
    users.push(user);
    localStorage.setItem('1',JSON.stringify(users));
    console.log(users);
}

function checkUser()
{
  var email=document.getElementById("em").value;
  var password=document.getElementById("psw").value;
  var x=JSON.parse(localStorage.getItem("1"));//to print the local storage data
  var flag=0;
  if(x!=null)
  {
      for(var i=0;i<x.length;i++)
      {
          if(x[i].mail==email && x[i].pass==password)
          {
            window.open("AddressBook.html");
            flag=1;
          }
      }
      if(flag==0)
      {
        window.alert("No user Found");
      }
  }
}

function Update()
{

}
