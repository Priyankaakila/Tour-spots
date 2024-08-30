import {useState} from "react";
const Tour = ({tour , removeTour}) => {

    const [readMore, setReadMore] = useState(false);

    const {id,image,info,name,price} =tour;

    const notInterestedHandler = (id)=>{
        removeTour(id);
    }

    return ( 
        <article className=" flex flex-col items-center  justify-center bg-white rounded-md my-8 shadow-lg w-3/4 ">
            <img src={image} alt={name} className="w-full h-72 object-cover hover:shadow-lg cursor-pointer"/>
            <footer className="py-3 px-4 ">
                <div className=" flex items-center justify-between mb-6">
                    <h4 className="mb-0 text-lg font-semibold">{name}</h4>
                    <h4 className="tour-price  text-red-600 font-semibold bg-slate-100 py-1 px-2">₹ {price}</h4>
                </div>
                <p>{readMore ? info : `${info.substring(0,300)}...`}
                <button onClick={()=> setReadMore(!readMore)} className="text-blue-500 font-semibold ml-4 hover:text-blue-400">{readMore ? 'ShowLess' : 'ReadMore'}</button>
                </p>
                
                <button onClick={()=>{notInterestedHandler(id)}} className="bg-transparent border border-transparent capitalize text-gray-500 text-md cursor-pointer px-2 py-1 shadow-md rounded-sm font-semibold hover:bg-gray-400 hover:text-white mt-4 font-serif">Not Interested</button>
            </footer>
            
        </article>
    );
}

export default Tour;