/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */
const initialState = {
  isFetching: false,
  items: []
};

module.exports = function(state = initialState, action) {

  switch(action.type) {
    case 'REQUEST_NEWS': {
      return {...state, isFetching: true};
    } break;
    case 'RECEIVE_NEWS': {
      return {...state, isFetching: false, items: action.response};
    } break;
    default: {
      /* Return original state if no actions were consumed. */
      return state;
    }
  }
}
