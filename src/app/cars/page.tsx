import Link from "next/link";
import React from "react";

const Cars = () => {
    return (
        <div className="flex flex-col items-center justify-center bg-gray p-4" >
            <h1 className="text-4xl font-bold text-gray-800 mb-6 " > All cars </h1>
            <ul className=" space-y-4 " >
                <Link className=" text-xl font-medium text-blue-600 hover:text-blue-800 hover:underline duration-200" href={'/cars/Audi/70k'} ><li>Audi</li></Link>
                <Link className=" text-xl font-medium text-blue-600 hover:text-blue-800 hover:underline duration-200" href={'/cars/BMW/80k'} ><li>BMW</li></Link>
                <Link className=" text-xl font-medium text-blue-600 hover:text-blue-800 hover:underline duration-200" href={'/cars/Tesla/100k'} ><li>Tesla</li></Link>
            </ul>
        </div>
    )
}

export default Cars;
