import receiveNews from './receiveNews'
import requestNews from './requestNews'
require('es6-promise').polyfill();
import fetch from 'isomorphic-fetch'

module.exports = (category) => {
  return dispatch => {
    dispatch(requestNews(category))
    return fetch("https://newstoday.rocks/api/v1/news/", {
      headers: {
        "Content-Type": "application/json",
        "News-Token": "d3b79b3e8c0405e8055dc9f7396e63b8dba38930"
      }
    })
      .then(req => {
        return req.json();
      })
      .then(json => dispatch(receiveNews(category, json)))
  }
};
