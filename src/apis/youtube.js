import Axios from 'axios';

const KEY = 'AIzaSyDwocV-uLjVfo5coslNXACTdsshmqISDsA'

export default Axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults: 10,
        key: KEY
    }
})

