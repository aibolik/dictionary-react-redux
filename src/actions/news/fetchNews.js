import receiveNews from './receiveNews'
import requestNews from './requestNews'
// require('es6-promise').polyfill();
// import fetch from 'isomorphic-fetch'

module.exports = (category) => {
  return dispatch => {
    dispatch(requestNews(category))
    var res = "[{\"id\": 8,\"title\": \"white\",\"definition\": \"white color\",\"language\": \"en\"}, {\"id\": 8,\"title\": \"university\",\"definition\": \"place where students take their diplomas\",\"language\": \"en\"}, {\"id\": 9,\"title\": \"student\",\"definition\": \"a person who studies in university\",\"language\": \"en\"}, {\"id\": 8,\"title\": \"студент\",\"definition\": \"человек, который учится в университете\",\"language\": \"ru\"}]";
    var j = JSON.parse(res);
  //   fetch('http://localhost:8080/api/words/en/?format=json', {mode:"no-cors"})
	// .then(function(res) {
	// 	console.log(res)
	// });

    dispatch(receiveNews(category, j))
    // return fetch("http://localhost:8080/api/words/en/?format=json", {
    //   //mode: "no-cors",
    //   headers: {
    //     //"Content-Type": "text/plain",
    //     "Content-Type": "application/json",
    //     //"News-Token": "d3b79b3e8c0405e8055dc9f7396e63b8dba38930"
    //   }
    // })
    //   .then(response => {
    //     //var arr = ["{\"id\": 8,\"title\": \"white\",\"definition\": \"color\",\"language\": \"en\"}"]
    //     //var res = JSON.stringify(arr);
    //     //console.log(res);
    //     console.log(response)
    //     return response.json()
    //   })
    //   .then(json => dispatch(receiveNews(category, json)))
  }
};

//https://newstoday.rocks/api/v1/news/

//http://localhost:8080/api/words/en
