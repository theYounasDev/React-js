import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'

const App = () => {

  const [userData, setuserData] = useState([])
  const [index, setIndex] = useState(1)

  const gitData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=14`
    )

    setuserData(response.data)
  }

  useEffect(() => {
    gitData()
  }, [index])

  let printUserData = (
    <h3 className='text-gray-500 text-sm absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
      Loading...
    </h3>
  )

  if (userData.length > 0) {

    printUserData = userData.map((ele, idx) => {

      return (

        <div
          key={idx}
          className='bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl overflow-hidden shadow-lg hover:scale-[1.03] transition-all duration-300'
        >

          <a href={ele.url} target="_blank" rel="noreferrer">

            <div className='h-[220px] sm:h-[250px] md:h-[220px] lg:h-[250px] overflow-hidden'>

              <img
                src={ele.download_url}
                alt=""
                className='h-full w-full object-cover hover:scale-110 transition-all duration-500'
              />

            </div>

            <div className='p-4'>

              <h6 className='text-white font-semibold text-sm md:text-base truncate'>
                📸 {ele.author}
              </h6>

            </div>

          </a>

        </div>

      )

    })

  }

  return (

    <div className='min-h-screen bg-gradient-to-br from-black via-gray-900 to-green-950 px-4 py-8 md:px-8'>

      {/* Heading */}
      <div className='text-center mb-10'>

        <h1 className='text-3xl md:text-5xl font-extrabold text-white'>
          Image Gallery
        </h1>

        <p className='text-gray-400 mt-3 text-sm md:text-base'>
          Responsive React + Tailwind Gallery
        </p>

      </div>

      {/* Images */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>

        {printUserData}

      </div>

      {/* Pagination */}
      <div className='flex flex-wrap justify-center items-center gap-5 mt-10'>

        <button
          onClick={() => {

            if (index > 1) {
              setIndex(index - 1)
            }

          }}
          className='bg-green-500 hover:bg-green-600 active:scale-95 transition-all duration-300 text-black px-6 py-3 rounded-2xl font-bold text-lg shadow-lg'
        >
          Prev
        </button>

        <h2 className='text-white text-xl font-bold'>
          Page {index}
        </h2>

        <button
          onClick={() => {
            setIndex(index + 1)
          }}
          className='bg-green-500 hover:bg-green-600 active:scale-95 transition-all duration-300 text-black px-6 py-3 rounded-2xl font-bold text-lg shadow-lg'
        >
          Next
        </button>

      </div>

    </div>

  )

}

export default App