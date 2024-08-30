import Tour from "./tour";
const Tours = ({tours , removeTour}) => {
    return ( 
        <section className="flex flex-col
        items-center justify-center p-8 bg-slate-50">
            <div className="">
                <h1 className="text-3xl font-semibold font-serif text-center mb-16">Escape Spots</h1>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center p-8 ">
                {tours.map((tour)=>{
                    return (<Tour key={tour.id} 
                    tour={tour}
                    removeTour={removeTour}
                    />)
                })}
            </div>
        </section>
    );
}

export default Tours;