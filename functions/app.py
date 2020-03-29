


import requests
import json
from flask import Flask, request, jsonify
from flask_cors import CORS

API_URL = "https://corona.lmao.ninja/countries"
ALL_COUNTRY_UPDATES = "https://corona.lmao.ninja/countries?sort="
SUMMARY = ""

app = Flask(__name__)
CORS(app)


@app.route('/countries', methods=['GET'])
def countries():
    data = ''
    with open('african-countries.json','r') as f:
        data = f.read()
    data = json.loads(data)
    results = aggregate()
    return jsonify(countries=results)

@app.route('/aggr', methods=['GET'])
def aggr():
    results = aggregate()
    # keys = results[0].keys()
    # print(keys)

    data = {}
    data['country'] = "Africa"
    data['aggregate'] = True
    data['countryInfo'] = {}
    data['countryInfo']['iso2'] = "Af." 
    for i in ['cases', 'todayCases','deaths', 'todayDeaths', 'recovered', 'active', 'critical', 'casesPerOneMillion', 'deathsPerOneMillion']:
        data[i] = sum([ int(result[i]) for result in results if result[i]])
    
    return data


def aggregate(sort=None):
    african_countries = ''
    results = []
    with open('african-countries.json','r') as f:
        african_countries = f.read()
        
    african_countries = json.loads(african_countries)['countries']
    african_countries = [country['iso2'] for country in african_countries]

    res = requests.get(ALL_COUNTRY_UPDATES)
    res = res.json()
    for entry in res:
        if entry['countryInfo']['iso2'] in african_countries:
            results.append(entry)
    
    return results

if __name__ == "__main__":
    app.run(port=8070, debug=True)


