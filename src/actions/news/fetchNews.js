import receiveNews from './receiveNews'
import requestNews from './requestNews'
require('es6-promise').polyfill();
import fetch from 'isomorphic-fetch'

module.exports = (category) => {
  return dispatch => {
    dispatch(requestNews(category))
    return fetch("http://localhost:8080/api/words/en", {
      mode: "no-cors",
      headers: {
        //"Content-Type": "text/plain",
        "Content-Type": "application/json",
        //"News-Token": "d3b79b3e8c0405e8055dc9f7396e63b8dba38930"
      }
    })
      .then(response => {
        return response.text();
      })
      .then(json => dispatch(receiveNews(category, json)))
  }
};

//https://newstoday.rocks/api/v1/news/

//http://localhost:8080/api/words/en
