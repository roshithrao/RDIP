
function validate()
{

   var name = document.getElementById("name").value;
   var mum = document.getElementById("mnumber").value;
   var email = document.getElementById("uemail").value;
   var regx =/^[a-zA-Z].*/;
   var regx1 = /^[6-9][0-9]{9}$/ ;
   var regx2 = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/ ;
   
  if(name.trim()==""||mum.trim()==""||email.trim()=="")
  {
  	
  	alert("Fields cannot be blank");
  	return false;
  
  }

  else if(regx.test(name) && regx1.test(mum) && regx2.test(email))
  {
  	alert("valid");
  	return true;
  }
  else
  {
  alert("Please enter according to format");
  return false;
   }
}

function Anagram()
{
   var word1;
   var word2;
   var str1 = document.getElementById("ana1").value;
   var str2 = document.getElementById("ana2").value;
   //console.log(str1);
   //console.log(str2);
   if(str1=="" || str2=="")
   {
   	 alert("Enter two strings to get result");
   	 return false;
   }
   else
   {   
        str1 = str1.replace(/[^\w]/g, " ").toLowerCase();
        str2 = str2.replace(/[^\w]/g, " ").toLowerCase();
        //console.log(str1);
        //console.log(str2);
        word1 = str1.split('').sort().join('').trim();
        word2 = str2.split('').sort().join('').trim();
        //console.log(word1);
        //console.log(word2);
       if(word1===word2)
       {
       	 document.getElementById("ana").innerHTML = "These are Anagrams!"
         document.getElementById("ana").style.background = "green";
         document.getElementById("ana").style.visibility = "visible";
         return true;
 
       }
        else
       {
       
          document.getElementById("ana").innerHTML = "These are not Anagrams!"
          document.getElementById("ana").style.background = "red";
          document.getElementById("ana").style.visibility = "visible";
          return false;

       }  
       
   } 

 }
  function parlindrome()
  {

    var str = document.getElementById("word").value;
      if(str=="")
     {
   	   alert("Enter word to get result");
   	   return false;
     }
      else
     {    
     	str = str.replace(/[^\w]/g, " ")
        len = str.length;
        start = str.substring(0,(Math.floor(len/2))).toLowerCase();
        end = str.substring(len-Math.floor(len /2)).toLowerCase();
        rev = end.split('').reverse().join('');
        console.log(start);
        console.log(end);
        console.log(rev); 

       if(start === rev)
        {
         document.getElementById("par").innerHTML = "It is a Parlindrome!"
         document.getElementById("par").style.background = "green";
         document.getElementById("par").style.visibility = "visible";
         return true;
        }
        else
        {
         document.getElementById("par").innerHTML = "It is not a Parlindrome!"
         document.getElementById("par").style.background = "red";
         document.getElementById("par").style.visibility = "visible";
         return false;
        }
     }   
  }  

 function result()
 {
     var map1 = new Map([[0 , "cockroach"], [1 ,"human"] ,[2, "nuclearbomb"]]); 
     var num1 = Math.floor(Math.random()*(1000-0)+0);
    document.getElementById("rand1").innerHTML = num1;
    
    var num2 = Math.floor(Math.random()*(1000-0)+0);
    document.getElementById("rand2").innerHTML = num2;
    var num3 = num1%3;
  
   	var num4 = num2%3;
    //document.getElementById("rand1").innerHTML = num3;
    //document.getElementById("rand2").innerHTML = num4;
    
    if((map1.get(num3)=="cockroach" && map1.get(num4)=="human") || (map1.get(num4)=="cockroach" && map1.get(num3)=="human"))
      {
          document.getElementById("res").innerHTML ="Human Survives";

      }
     else if((map1.get(num3)=="human" && map1.get(num4)=="nuclearbomb") || (map1.get(num4)=="human" && map1.get(num3)=="nuclearbomb"))
      {
           document.getElementById("res").innerHTML ="Nuclear Bomb Survives";
      	
      }
      else if((map1.get(num3)=="nuclearbomb" && map1.get(num4)=="cockroach") || (map1.get(num4)=="nuclearbomb" && map1.get(num3)=="cockroach"))
      {
           document.getElementById("res").innerHTML = "Cockroach Survives";
      	
      }
      else if((map1.get(num3)=="cockroach") == (map1.get(num4)=="cockroach"))
      {
           document.getElementById("res").innerHTML = "There is a TIE"

      }
      else if((map1.get(num3)=="human") == (map1.get(num4)=="human"))
      {
           document.getElementById("res").innerHTML = "There is a TIE"


      }
      else if((map1.get(num3)=="nuclearbomb") == (map1.get(num4)=="nuclearbomb"))
      {
      	    document.getElementById("res").innerHTML = "There is a TIE"
      }
      else
      {
      	return false;
      }

   return true;

 }

 function add(a,b)
 {
 	if(a==""|| b=="")
 	{
 		alert("Please enter both he numbers to get result");
 		return false;
 	}	
 	else
 	{
     var sum = parseInt(a)+parseInt(b);
     alert("The addition of  "+ a + " and  "+ b + "  is "+ sum);
     return sum;
   }
}
function sub(a,b)
{
    if(a==""|| b == "")
 	{
 		alert("Please enter both he numbers to get result");
 		return false;
 	}	

    else {
    var sub = parseInt(a)-parseInt(b);
    alert("The subtraction of  "+a + "  and  " +b+ " is  " + sub);
    return sub;
  }
}
function mult(a,b)
{
    if(a==""|| b == "")
 	{
 		alert("Please enter both he numbers to get result");
 		return false;
 	}	

    else {
    var mul = parseInt(a)*parseInt(b);
    alert("The multiplication of  "+a + "  and  " +b+ " is  " + mul);
    return mul;
  }
}
function divison(a,b)
{
    if(a==""|| b == "")
 	{
 		alert("Please enter both he numbers to get result");
 		return false;
 	}	
    else 
    {
     var first = parseInt(a);
     var second = parseInt(b);
      if(second==0)
      {
    	alert("The second value cannot be zero");
    	return false;
      
       }
        else
       {
          
         var divi = first/second; 
           divi = divi.toPrecision(3);
         alert("The divison of  "+a + "  and  " +b+ " is  " + divi);
         return divi;
       }
    }
}
function percn(a,b)
{
    if(a==""|| b == "")
 	{
 		alert("Please enter both the numbers to get result");
 		return false;
 	}	

    else {
           var percent = ((parseInt(a)/100)*parseInt(b));
           alert("The percentage of  "+a + "  of  " +b+ " is  " + percent);
           return percent;
  }
}
function sqrtn(c)
{
    if(c=="")
 	{
 		alert("Please enter the number to get result");
 		return false;
 	}	

    else 
    {
           var num1 = parseInt(c);
           if(num1<0)
           {
           	  alert("Please enter only positive numbers to get the result");
           	  return false;
           }
           else
           {

              var sqrtnum = Math.sqrt(num1);
              if(sqrtnum-Math.floor(sqrtnum)==0)
              {
              	alert("The sqrtnum of  "+c + " is " +sqrtnum);
              	return sqrtnum;
              }
              else
              {
                  var sqrtnumr = sqrtnum.toPrecision(6);
                  alert("The sqrtnum of  "+c + " is " +sqrtnumr);
              	  return sqrtnumr;
              }
            }
    }
}
function absn(c)
{
    if(c=="")
 	{
 		alert("Please enter the number to get result");
 		return false;
 	}
 	else
 	{ 
 		var ab = Math.abs(parseInt(c));
 		alert("The absolute of a number " +ab+ " is " +ab);
 		return ab;
 	}	
}