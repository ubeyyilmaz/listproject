import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID lp3Yh0fn4lGQTKDdJlH2lk9E6vElOqKLRBE3jR0qwCU',
        },
        params: {
            query: term,
        },
    });


    return response.data.results;
};

export default searchImages;