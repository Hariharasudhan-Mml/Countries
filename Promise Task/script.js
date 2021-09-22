

let container=document.createElement('div');
container.className="container";
document.querySelector("body").prepend(container);

async function fetchData(){
var response=await fetch("https://restcountries.eu/rest/v2");
const data= await response.json();

data.forEach(country => {
   let div= document.createElement('div');
   div.className=country.name+" box";
   document.querySelector('.container').appendChild(div);
   
//
   let country_name=document.createElement('p');
   country_name.className="country-name";
   country_name.innerText=country.name;
   div.appendChild(country_name);
// 
let image=document.createElement('img');
image.className="img";
image.src=country.flag;
div.appendChild(image);

//
 let capital=document.createElement('p');
 capital.className="capital";
 capital.innerHTML="Capital:<span>"+country.capital+"</span>";
 div.appendChild(capital);
 //
let currency_name=document.createElement('p');
currency_name.innerHTML="Currency-Name:<strong>"+country.currencies[0].name+"</strong>"
div.appendChild(currency_name);
//
let currency_code=document.createElement('p');
currency_code.innerHTML="Currency-Code:<strong>"+country.currencies[0].code+"</strong>"
div.appendChild(currency_code);
//
let symbol=document.createElement('p');
symbol.innerHTML="Currency-Symbol:<strong>"+country.currencies[0].symbol+"</strong>"
div.appendChild(symbol);
//
 let country_code=document.createElement('p');
 country_code.className="country-code";
 country_code.innerHTML="Country Codes:<strong>"+country.alpha2Code+","+country.alpha3Code+"</strong>";
div.appendChild(country_code);
//
let region=document.createElement('p');
region.className="region";
region.innerHTML="Region:<strong>"+country.region+"</strong>";
div.appendChild(region);
//
let latlong=document.createElement('p');
latlong.className="latlong";
latlong.innerHTML="Lat,Long:<strong>"+country.latlng[0]+","+country.latlng[1]+"</strong>";
div.appendChild(latlong);
});
}
fetchData();
