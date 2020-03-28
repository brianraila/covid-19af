// VANILLA JS BABY
const countries = [
    {name:"Kenya"},
    {name:"Uganda"},
    {name:"Tanzania"},
    {name:"Rwanda"},
    {name:"Burundi"},
    {name:"Ethiopia"},
    {name:"Somalia"},
    {name:"Zambia"},
    // {name:"Zimbabwe"},
    // {name:"Egypt"},
    {name:"Nigeria"},
    // {name:"Ghana"},
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
    <a href="#" class="btn btn-outline-success">Share</a>
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

