import Products from "../Products/Products"

const Recommended = () => {
    return (
        <div className="w-7xl grid gap-10 mx-auto py-20">
            <div className="flex justify-between items-end font-open-sans">
                <div className="grid gap-3">
                    <h1 className="text-4xl font-bold ">Highly Recommended</h1>
                    <p>Electronics products continue to drive innovation and shape the
                       <br /> way we live, work, and interact with our environment.</p>
                </div>
                <button className='px-7 py-3 border rounded-full cursor-pointer active:scale-95 hover:-translate-y-1 transition-all'>View More</button>
            </div>

            <div>
                <Products/>
            </div>
        </div>
    )
}

export default Recommended