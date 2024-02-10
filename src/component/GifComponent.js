import React, { useState } from 'react'
import useGif from '../hooks/useGif'
import Loader from './Loader';

const GifComponent = ({isInputGif,className}) => {

    const [tag,setTag]=useState('cute cats');
    const {loaderState,gifUrl,fetchGifUrl}=useGif(isInputGif,tag);

    const divStyling=`flex flex-col items-center justify-center gap-4 py-4 w-full lg:w-1/2 
    border-2 border-gray-500 rounded-2xl ${className}`

  return (
    <div className={divStyling}>

        <h2 className='underline font-bold md:text-2xl text-xl uppercase'>{isInputGif?(`random ${tag} gif`):('A RANDOM GIF')}</h2>

        {loaderState?(<Loader/>):(<img src={gifUrl} alt='random gif' className='max-w-[30rem] px-4 '/>)}

        {isInputGif?(<input type='text' 
                            value={tag} 
                            className='md:w-4/5 w-2/3 text-center rounded-md border 
                                        border-gray-300 px-3 py-2 focus:z-10 text-sm lg:text-lg'
                            onChange={(event)=>setTag(event.target.value)}/>)
                    :(false)}

        <button
         onClick={()=>fetchGifUrl(tag)}
         className='w-4/5 py-2 bg-white/70 rounded-lg my-2 hover:bg-white transition-all font-semibold '>GENERATE</button>

    </div>
  )
}

export default GifComponent