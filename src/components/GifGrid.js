import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {


   const {  data:imgs, loading} = useFetchGifs(category);

    return (
        <>
            <h3 className="card animate__animated animate__backInDown"> {category} </h3>   


            { loading && <p className="card animate__animated animate__backInDown">Loading</p> }
                <div className="card-grid">
                    
                    {
                        
                        imgs.map( img => (
                            <GifGridItem 
                            key={img.id} 
                            { ...img }
                            />
                            
                        ))
                        }
                    
                </div>
        
        </>
    )
}
