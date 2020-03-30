# Covid-19af 

Providing realtime, accurate but free and OSS data for Current cases and more stuff about COVID-19 in Africa.

### Background
After searching and failing to find a Covid-19 monitor mainly focused on African Countries. I decided to make one with a focus on the African continent.

#### Currently its provides information on
1. Active Cases
2. All reported cases
3. Critical cases
4. Total number of deaths 😢
5. Cases Recovered 👌🏿
6. Cases Today
7. Deaths Today

## Tools and Technologies.

### Frontend
1. Vanilla JS 
2. HTML
3. Bootstrap CSS

This code in available in the root folder of the project.
This service is deployed [Netlify](https://netlify.com)


### Backend
1. Python
2. Flask

This code in available in the [functions](https://github.com/brianraila/covid-19-africa/tree/master/functions) directory of the project 
This service is deployed on GCP using [Cloud Run](https://console.cloud.google.com/run)

Deployed within the same directory is a [Dockerfile](https://github.com/brianraila/covid-19-africa/blob/master/functions/Dockerfile) to the project that you can use to set up then change the URL configuration in the [index.js](https://github.com/brianraila/covid-19-africa/blob/master/index.js) file.

## Additional.

In addition to the website itself, I also built a JSON API to allow for programmatic access to this same exact data.
The API is currently available on 

For the aggregated metrics 

    https://covid-19af.karat.co.ke/aggr
    
For all the values, by country.

    https://covid-19af.karat.co.ke/countries

    
 ## Credits.
 Following the resources, data and services provided by this [NovelCovid project](https://github.com/novelcovid/api).
 You can check it out if you need to pull off something similar.
 
