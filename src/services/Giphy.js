import axios from "axios";

export function searchGiphy(keyword, limit, offset) {

    let url = `https://api.giphy.com/v1/gifs/search?api_key=ZK15ijRdUSPnVoP2xgckPrnJRjIN7JGF&q=${keyword}&limit=${limit || 9}&offset=${offset || 0}&rating=g&lang=en`
    return axios.get(url).then((res) => {
        return res.data
    })
}

export function trendingGiphy(limit) {

    let url = `https://api.giphy.com/v1/gifs/trending?api_key=ZK15ijRdUSPnVoP2xgckPrnJRjIN7JGF&limit=${limit}&rating=g`
    return axios.get(url).then((res) => {
        return res.data
    })
}