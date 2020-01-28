import { GET_NAMES } from "../redux/types";

export function getNames() {
  const fetchNames = fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .catch(err => console.log("err", err));

  return {
    type: GET_NAMES,
    payload: fetchNames
  };
}
