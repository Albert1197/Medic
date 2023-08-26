import { useForm } from "react-hook-form"
import NavBar from '../components/NavBar'
import { Await } from "react-router-dom"



const ShiftsPage = () => {

    const {register, handleSubmit, formState: {errors}} = useForm()
    const onSubmit = async (data) => {

        try {
            //logica
            const response= await fetch('http://localhost:8000/api/patients', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        } )
        const patient = await response.json()
        console.log(patient)

        } catch (error) {

    console.log("Este es un error si falla la Api",error )
            
        }


        //console.log(data)
    }
    
          
    return (
        <>
            <NavBar></NavBar>
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                <div className="md:flex">
                    <div className='p-8 w-full'>
                        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold mb-1"> Form to add patient</div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input 
                                className='shadow appearance-none border rounded w-full m-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
                                type="text" 
                                {...register("name", {required: true})}
                                placeholder='Patient Name'
                            />
                            {errors.name && <span className="text red-300">This Form is required</span>}
    
                            <input 
                                className='shadow appearance-none border rounded w-full m-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
                                type="number" 
                                {...register("age", {required: true})} 
                                placeholder='Patient Age'
                            />
                            {errors.age && <span className="text red-300">This Form is required</span> }
                            <input 
                                className='shadow appearance-none border rounded w-full m-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
                                type="number" 
                                {...register("n_afi", {required: true})} 
                                placeholder='Patient affiliation number' 
                            />
                            {errors.n_afi && <span className="text red-300">This Form is required</span> }
                            <textarea className='shadow appearance-none border rounded m-3 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                {...register("address", {required: true})} 
                                id="" 
                                cols="30" 
                                rows="10"
                                placeholder='Patient Address'
                            ></textarea>
    
                            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type='submit'>Add Patient</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
      )
    
    
}

export default ShiftsPage
