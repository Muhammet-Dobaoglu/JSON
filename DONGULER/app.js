const cars=["BMW","Volvo","Saab","Ford","Fiat","Audi"]

let text="";
for(let i=0; i<cars.length; i++)
{
    text +=  cars[i] + "<br>";
    console.log(cars[i]);
    console.log(text);
    document.getElementById("cars").innerHTML=text;
}


function getCars()
{
    var div = document.getElementById("cars");

    if (div.style.display = "none") 
        {
             div.style.display = "block";
        } 
      
      else 
         {
              div.style.display = "none";
         }
}
