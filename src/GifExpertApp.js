import React,{useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
  
   
    const [categories, setCategories] = useState(['Samurai X']);
   
//    const handleAdd = () => {
//             // setCategories([...categories,'diego']);
//             setCategories( cats => [...cats,'diego']);
//    }

    return (
        <>
             <h2>GifExpertApp diego</h2>
             <AddCategory setCategories={ setCategories } />
             <hr />

             {/* <button onClick={handleAdd}>Agregar</button> */}

             <ol>
                { 
                    categories.map( category => 
                        ( <GifGrid 
                            key={category}
                            category={category} />)
                    ) 
                 }    
             </ol>
        </>
    )
}
