import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {addCarsSchema} from "./CarSchema";
import {type ICar, postCar} from "./car.service";


function CarsFormComponent() {
    const {handleSubmit, register, formState: {errors}} = useForm<ICar>({resolver: joiResolver(addCarsSchema)});

    const onSubmit = (data: ICar) => {
        postCar(data)
        console.log(data)
    }

    return (
        <form className='flex flex-col items-center justify-center min-h-screen gap-6'
              onSubmit={handleSubmit(onSubmit)}>
            <input
                className="w-full max-w-xs px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder='brand/model' type="text" {...register('brand')}/>
            {errors.brand && <div style={{color: 'red'}}>{errors.brand.message}</div>}

            <input
                className="w-full max-w-xs px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder='year of manufacture'
                type="number" {...register('year', {valueAsNumber: true})}/>
            {errors.year && <div style={{color: 'red'}}>{errors.year.message}</div>}

            <input
                className="w-full max-w-xs px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder='price'
                type="number"  {...register('price', {valueAsNumber: true})}/>
            {errors.price && <div style={{color: 'red'}}>{errors.price.message}</div>}

            <button
                className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg shadow-sm hover:bg-blue-700 hover:shadow-md active:scale-95 transition-all duration-200 w-full max-w-xs">Submit
            </button>
        </form>
    )

}

export default CarsFormComponent;