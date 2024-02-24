import axios from 'axios'

export async function instaSave(url: string | undefined) {
    try {
        const options = {
            method: 'GET',
            url: 'https://instagram-post-and-reels-downloader.p.rapidapi.com/',
            params: {url},
            headers: {
              'X-RapidAPI-Key': '344d175c65msh7d0803799915868p16b6c3jsnbfaa33e06551',
              'X-RapidAPI-Host': 'instagram-post-and-reels-downloader.p.rapidapi.com'
            }
          };
        const response = await axios.request(options)

        return response.data
    } catch (error) {
        throw error
    }
}
