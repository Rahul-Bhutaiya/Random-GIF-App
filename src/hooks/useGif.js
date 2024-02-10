import { useEffect, useState } from 'react';
import axios from 'axios';

const useGif = (isInputGif,tag) => {

    const [loaderState,setLoaderState]=useState(true);
    const [gifUrl,setGifUrl]=useState('');
    const gifAPI='https://api.giphy.com/v1/gifs/random?api_key=zq237ZjXTfTm9h2VpGCzFpKi48Z3anVH';

    async function fetchGifUrl(tag){
        try{
            setLoaderState(true);
            const responce=await axios.get(isInputGif?`${gifAPI}&tag=${tag}`:gifAPI);
            setGifUrl(responce.data.data.images.downsized_large.url);
            setLoaderState(false);
        }
        catch(error){
            console.log(error);
        }

    }
    
    useEffect(()=>{
        fetchGifUrl(tag);
    },[]);
    
    return {loaderState,gifUrl,fetchGifUrl}

}

export default useGif