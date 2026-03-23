import axios from "axios";
import { BASE, FIELDS } from "./apiUrl";

interface queryParams {
  name?: string;
  continent?: string;
  favorites?: string;
}

const fetchData = async ({ name }: queryParams) => {
  if (name) {
    const res = await fetch(`${BASE}/name/${name}${FIELDS}`);
    const data = res.json();
    return data;
  } else {
    const res = await fetch(`${BASE}/all${FIELDS}`);
    const data = res.json();
    return data;
  }
};
export default fetchData;
