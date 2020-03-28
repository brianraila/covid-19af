// VANILLA JS BABY
const countries = [
    {name:"..."},
    {name:"Algeria", iso2:"DZ"},
    {name:"Angola",iso2:"DZ"},
    {name:"Benin",iso2:"BJ"},
    {name:"Botswana",iso2:"BW"},
    {name:"Burkina Faso",iso2:"BF"},
    {name:"Burundi",iso2:"BI"},
    {name:"Cameroon",iso2:"CM"},
    {name:"Cape Verde",iso2:"CV"},
    {name:"Central African Republic",iso2:"CF"},
    {name:"Chad", iso2:"TD"},
    {name:"Comoros",iso2:"KM"},
    {name:"Djibouti",iso2:"DJ"},
    {name:"Democratic Republic of Congo",iso2:"CD"},
    {name:"Egypt",iso2:"EG"},
    {name:"Equatorial Guinea",iso2:"GQ"},
    {name:"Eritrea",iso2:"ER"},
    {name:"Eswatini",iso2:"SZ"},
    {name:"Ethiopia",iso2:"ET"},
    {name:"Gabon",iso2:"GA"},
    {name:"Gambia",iso2:"GM"},
    {name:"Ghana",iso2:"GH"},
    {name:"Guinea",iso2:"GN"},
    {name:"Guinea-Bissau",iso2:"GW"},
    {name:"Ivory Coast",iso2:"CI"},
    {name:"Kenya",iso2:"KE"},
    {name:"Lesotho",iso2:"LS"},
    {name:"Liberia",iso2:"LR"},
    {name:"Libya",iso2:"LY"},
    {name:"Madagascar",iso2:"MG"},
    {name:"Malawi",iso2:"MW"},
    {name:"Mali",iso2:"ML"},
    {name:"Mauritania",iso2:"MR"},
    {name:"Mauritius",iso2:"MU"},
    {name:"Mayotte (France)",iso2:"YT"},
    {name:"Morocco",iso2:"MA"},
    {name:"Mozambique",iso2:"MZ"},
    {name:"Namibia",iso2:"NA"},
    {name:"Niger",iso2:"NE"},
    {name:"Nigeria",iso2:"NG"},
    {name:"RÃ©union (France)",iso2:"RE"},
    {name:"Republic of the Congo",iso2:"CG"},
    {name:"Rwanda",iso2:"RW"},
    {name:"Sao Tome and Pri­ncipe",iso2:"ST"},
    {name:"Saint Helena, Ascension and Tristan da Cunha (UK)",iso2:"SH" },
    {name:"Senegal", iso2:"SN"},
    {name:"Seychelles",iso2:"SC"},
    {name:"Sierra Leone", iso2:"SL"},
    {name:"Somalia", iso2:"SO"},
    {name:"South Africa",iso2:"ZA"},
    {name:"South Sudan", iso2:"SS"},
    {name:"Sudan",iso2:"SD"},
    {name:"Tanzania",iso2:"TZ"},
    {name:"Togo", iso2:"TG"},
    {name:"Tunisia",iso2:"TN"},
    {name:"Uganda", iso2:"UG"},
    {name:"Western Sahara",iso2:"EH"},
    {name:"Zambia",iso2:"ZM"},
    {name:"Zimbabwe",iso2:"ZW"},
]

const process_response = function(response){
    if(response.message){
        document.getElementById('country_flag').setAttribute("src", "images/covid.png");
        document.getElementById('country_code').innerHTML = "🙁" ;
        return `
        <h6> ❌ Sorry ❌ <br>${response.message}</h6>`
      }
    document.getElementById('country_flag').setAttribute("src", response.countryInfo.flag || "covid.png")
    document.getElementById('country_code').innerHTML = `${response.country} - (${response.countryInfo.iso2})`;
    return `
    <h5 class="card-title" style="font-weight:bold">Today</h5>
    <!-- <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> -->
    <ul class="list-group list-group-flush">
      <li class="list-group-item">
        <p class="row">
          <span class="col">Cases: ${response.todayCases}</span>
          <span class="col">Deaths: ${response.todayDeaths}</span></p></li></ul>
    <p></p>
    <h6 style="font-weight: bold;">Alltime</h6>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">
        <p class="row"><span class="col">Active: ${response.active}</span><span class="col">Recovery: ${response.recovered}</span></p></li>
      <li class="list-group-item">
        <p class="row">
          <span class="col">Critical: ${response.critical} </span>
          <span class="col">Deaths: ${response.deaths}</span></p></li></ul><p></p>
    <a href="" class="btn btn-outline-success"><i class="fa fa-share"></i> Share</a>
    <a href="" class="btn btn-outline-success"><i class="fa fa-ellipsis-h"></i> Explore</a>
    
    `
}

const country_select = document.getElementById('country_select');
const API_URL = 'https://corona.lmao.ninja/countries/'

for(r of countries){
        opt = document.createElement('option');
        opt.appendChild( document.createTextNode(r.name) );
        opt.value = r.iso2;
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

