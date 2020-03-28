// VANILLA JS BABY
const countries = [
    {name:"..."},
    {name:"Algeria"},
    {name:"Angola"},
    {name:"Benin"},
    {name:"Botswana"},
    {name:"Burkina Faso"},
    {name:"Burundi"},
    {name:"Cameroon"},
    {name:"Cape Verde"},
    {name:"Central African Republic"},
    {name:"Chad"},
    {name:"Comoros"},
    {name:"Democratic Republic of Congo"},
    {name:"Egypt"},
    {name:"Equatorial Guinea"},
    {name:"Eritrea"},
    {name:"Ethiopia"},
    {name:"Gabon"},
    {name:"Gambia"},
    {name:"Ghana"},
    {name:"Guinea"},
    {name:"Guinea-Bissau"},
    {name:"Ivory Coast"},
    {name:"Kenya"},
    {name:"Lesotho"},
    {name:"Liberia"},
    {name:"Libya"},
    {name:"Madagascar"},
    {name:"Malawi"},
    {name:"Mali"},
    {name:"Mauritania"},
    {name:"Mauritius"},
    {name:"Mayotte (France)"},
    {name:"Morocco"},
    {name:"Mozambique"},
    {name:"Namibia"},
    {name:"Niger"},
    {name:"Nigeria"},
    {name:"RÃ©union (France)"},
    {name:"Republic of the Congo"},
    {name:"Rwanda"},
    {name:"SÃ£o TomÃ© and PrÃ­ncipe"},
    {name:"Saint Helena, Ascension and Tristan da Cunha (UK)"},
    {name:"Senegal"},
    {name:"Seychelles"},
    {name:"Sierra Leone"},
    {name:"Somalia"},
    {name:"South Africa"},
    {name:"South Sudan"},
    {name:"Sudan"},
    {name:"Tanzania"},
    {name:"Togo"},
    {name:"Tunisia"},
    {name:"Uganda"},
    {name:"Western Sahara"},
    {name:"Zambia"},
    {name:"Zimbabwe"},
]

const process_response = function(response){
    if(response.message){
        document.getElementById('country_flag').setAttribute("src", "images/covid.png");
        document.getElementById('country_code').innerHTML = "🙁" ;
        return `
        <h6>
        ❌ Sorry ❌ <br>
        ${response.message}</h6>
        `
    }
    document.getElementById('country_flag').setAttribute("src", response.countryInfo.flag || "covid.png")
    document.getElementById('country_code').innerHTML = response.countryInfo.iso2 || "" ;
    return `
    <h5 class="card-title" style="font-weight:bold">Today</h5>
    <!-- <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> -->
    <ul class="list-group list-group-flush">
      <!-- <li class="list-group-item"></li> -->
      <li class="list-group-item">
        <p class="row">
          <span class="col">Cases: ${response.todayCases}</span>
          <span class="col">Deaths: ${response.todayDeaths}</span>
        </p>
      </li>
    </ul>
    <p></p>
    <h6 style="font-weight: bold;">Alltime</h6>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">
        <p class="row">
          <span class="col">Active: ${response.active}</span>
          <span class="col">Recovered: ${response.recovered}</span>
        </p>
      </li>
      <li class="list-group-item">
        <p class="row">
          <span class="col">Critical: ${response.critical} </span>
          <span class="col">Deaths: ${response.deaths}</span>
        </p>
      </li>
    </ul>
    <p></p>
    <a href="" class="btn btn-outline-success"><i class="fa fa-share"></i> Share</a>
    <a href="" class="btn btn-outline-success"><i class="fa fa-ellipsis-h"></i> Explore</a>

    
    `
}

const country_select = document.getElementById('country_select');
const API_URL = 'https://corona.lmao.ninja/countries/'

for(r of countries){
        opt = document.createElement('option');
        opt.appendChild( document.createTextNode(r.name) );
        opt.value = r.name;
        country_select.appendChild(opt);
        
    }

country_select.addEventListener("change", function(){
    console.log(API_URL + country_select.value);
    fetch(API_URL + country_select.value)
    .then((response) => response.json())
    .then(response => {
        // console.log(response);
        document.getElementById('card_body').innerHTML = process_response(response);
    })
    .catch((error)=>{
        console.log(error);
    })
})

