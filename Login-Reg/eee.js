  var users=[];
  var userid=1;
  var reg= document.getElementById("lan");
  var arr= JSON.parse(localStorage.getItem("2"));
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
      localStorage.setItem('2',JSON.stringify(users));
      console.log(users);
  }
  function displayValues()
  {
      var it = JSON.parse(localStorage.getItem('2')) || [];

      for(var i=oldItems.length-1;i>=0;i--)
      {
          var html=document.getElementById("22").innerHTML;
          document.getElementById("22").innerHTML=html+"<br>"+it[i].2;
      }
      }
