export default function (state=null, action) {
  switch(action.type) {
    case "GET_DATA":
        return fetch('https://pokeapi.co/api/v2/pokemon/?limit=40&offset=0')
          .then(response => response.json())
          .then(response => {
            return {...state, count: response.count, results: response.results}
          })

    default:
      return state

  }
}
