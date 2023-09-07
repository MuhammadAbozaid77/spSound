import React  from 'react'
import artists from '../Context/ArtistData'
import { Link } from 'react-router-dom';
import { DualRing } from 'react-css-spinners';


export default function Artist() {

return <>

    {
      artists.length  > 0 ?
    
            <div className='grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2'>
            {
                  artists.map((artistART , index)=>(
                    <div className='bg-white rounded-md p-2' key={index}>

                          <Link to={`/artistsdetails/${artistART.id}`} > 
                              <div className='relative flex justify-center items-center'>
                                <img className='w-[full] rounded-md' src={artistART.image} alt="" />
                                <div className='rounded-md cursor-pointer absolute inset-0 hover:bg-[#1062c086]'>  </div>
                              </div>
                          </Link>
                          <div>
                              <h1 className='text-[#193f6b] capitalize mt-1'> {artistART.name} </h1>
                          </div>
                    </div>
                  ))
                }
            </div>
          :
          <div className='absolute inset-0 flex justify-center items-center'>
            <DualRing size={40} color='gray'     thickness={3} />
          </div>
    }
  </>


}
