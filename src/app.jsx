import { useState,useEffect } from "react";
import { data } from './data';

import Tours from './tours';

const url = 'https://course-api.com/react-tours-project';

const App = ()=>{
    const [tours , setTours] = useState([]);

    const removeTour=(id)=>{
        const updatedTours = tours.filter((tour) => tour.id !== id);setTours(updatedTours);
    };

    // const fetchTours = async() =>{
    //     try{
    //         const response = await fetch(url);
    //         const data = await response.json();
    //         setTours(data);
    //     } catch(err){
    //         console.log(err);
    //     }
    // };
    useEffect(() =>{
        setTours(data);
    }, []);


    if(tours.length === 0){
        return (
            <main className='flex items-center justify-center h-screen bg-yellow-100'>
                <div className="flex flex-col items-center justify-center gap-4">
                    <h2 className='text-4xl font-bold font-serif'>No Tours Left</h2>
                    <button className="border-2 py-1 px-4 rounded-md font-semibold bg-blue-500 text-xl font-serif text-white" 
                    onClick={()=>setTours(data)}>
                        Refresh
                        </button>
                </div>
            </main>
        );
    };
    return(
        <main className="">
            <Tours tours={tours} removeTour={removeTour}/>
        </main>
    )
}

export default App;