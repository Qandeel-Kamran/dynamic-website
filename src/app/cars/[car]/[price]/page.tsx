import React from "react";
import Image from "next/image";

const Car = ({params} :{params : {car :string; price :number } } ) => {

    const carName = params.car.toLocaleLowerCase();
    const imagePath = `/${carName}.jpg`;
    return (
        <div className="flex flex-col items-center" >
            <h1 className="text-2xl font-bold" > {params.car} </h1>
            <h2 className="text-xl text-gray-500" > {params.price} </h2>
            <Image width={500} height={300} src={imagePath} alt={imagePath} />
        </div>
    )
}
export default Car;