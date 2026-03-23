import fetchData from "./fetchData";
export default async function fetchCardData() {
    const res = await fetchData.get("")
    return res.data
}