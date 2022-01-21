import axios from 'axios';

// const KEY = process.env.YOUTUBE_APP_API_KEY

const KEY = 'AIzaSyDPpkoWdd63-M_pdivQIDpNN_xWqDTTuvg'

const youtube = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3'
})

const params = {
    part: 'snippet',
    maxResults: 40,
    key: KEY,
    regionCode: 'JP',
    type: 'video',
}

export const fetchPopularData = async() => {
    return await youtube.get('/videos', {
        params: {
            ...params,
            chart: 'mostPopular'
        }
    })
}

export const fetchSelectedData = async(id) => {
    return await youtube.get('videos', {
       params: {
           ...params,
           id
       }
    })
}

export const fetchRelatedData = async(query) => {
    return await youtube.get('/search', {
        params: {
            ...params,
            q: query
        }
    })
}