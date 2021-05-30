const axios = require('axios');
const qs = require('qs');

const DATA_URL = "http://localhost:3030";

const headers = {
    'Accept': 'application/sparql-results+json,*/*;q=0.9',
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
}

exports.getLagu = async(param)=>{
    // Query
    const queryData = {
    query: `PREFIX data:<http://example.com/>
    PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> 
    SELECT ?id ?title ?asal ?pencipta ?link 
    WHERE{
        ?sub rdf:type data:lagudaerah
        OPTIONAL {?sub data:id ?id.}
        OPTIONAL {?sub data:title ?title.}
        OPTIONAL {?sub data:asal ?asal.}
        OPTIONAL {?sub data:pencipta ?pencipta.}
        OPTIONAL {?sub data:link ?link.}
        FILTER regex(?id, "${param.id ? param.id : ''}", "i")
        FILTER regex(?title, "${param.title ? param.title : ''}", "i")
        FILTER regex(?asal, "${param.asal ? param.asal : ''}", "i")
        FILTER regex(?pencipta, "${param.pencipta ? param.pencipta : ''}", "i")
        FILTER regex(?link, "${param.link ? param.link : ''}", "i")
    }`
    };
    try{
        const {data} = await axios(`${DATA_URL}/LaguDaerah/query`,{
            method: 'POST',
            headers,
            data: qs.stringify(queryData)

        });
        console.log(data.results)
        return data.results;
    }catch(err){
        res.status(400).json(err);
    }
};

module.exports = exports;