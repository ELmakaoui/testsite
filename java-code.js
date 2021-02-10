function showcity() {
    var villecourant = document.getElementById("city-selecte").value;
     document.getElementById("demo").innerHTML = "you selected: " + villecourant;
    console.log(villecourant) ;
    let cities =document.getElementsByClassName("city");
    let l=cities.length;
    for(let i=0;i<l;i++ ) {
    city=cities[i];
    if(city.id==villecourant)
    { city.style.display="";
    } else {city.style.display="none";}
    }
    }
