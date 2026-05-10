import React, { useState } from 'react'

const App = () => {
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')

  const [task, setTask] = useState([])

  function handleSubmit(e) {
    e.preventDefault()

    const coptTask = [...task]
    coptTask.push({ title, details })

    setTask(coptTask)

    setTitle('')
    setDetails('')
  }

  function handleDelete(idx) {
    const coptTask = [...task]
    coptTask.splice(idx, 1)
    setTask(coptTask)
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white px-4 py-8 md:px-10 lg:px-20'>

      <h1 className='text-3xl md:text-5xl font-bold text-center mb-10'>
        Notes App
      </h1>

      <div className='flex flex-col lg:flex-row gap-10'>

        {/* LEFT SIDE */}
        <div className='w-full lg:w-[40%]'>

          <form
            className='bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 md:p-8 shadow-2xl flex flex-col gap-5'
            onSubmit={(e) => {
              handleSubmit(e)
            }}
          >

            <h1 className='text-2xl font-bold mb-2'>
              Add Notes
            </h1>

            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className='border border-gray-600 rounded-xl p-3 text-white bg-gray-800 outline-none focus:border-blue-500 transition-all duration-300 placeholder:text-gray-400'
              type="text"
              placeholder='Enter title'
            />

            <textarea
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              className='border border-gray-600 rounded-xl p-3 text-white bg-gray-800 outline-none focus:border-blue-500 transition-all duration-300 placeholder:text-gray-400 min-h-[140px] resize-none'
              placeholder='Enter details'
            ></textarea>

            <button
              className='bg-blue-500 hover:bg-blue-600 active:scale-95 transition-all duration-300 text-white py-3 rounded-xl font-semibold'
              type='submit'
            >
              Add Note
            </button>

          </form>

        </div>

        {/* RIGHT SIDE */}
        <div className='w-full lg:w-[60%]'>

          <div className='bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 md:p-8 shadow-2xl'>

            <h1 className='text-2xl font-bold mb-6'>
              Recent Notes
            </h1>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>

              {task.length > 0 ? (
                task.map(function (item, idx) {
                  return (
                    <div
                      key={idx}
                      className='bg-gray-900 border border-gray-700 p-5 rounded-2xl hover:scale-[1.02] transition-all duration-300 shadow-lg'
                    >

                      <h2 className='text-xl font-bold break-words'>
                        {item.title}
                      </h2>

                      <p className='text-gray-300 mt-2 break-words'>
                        {item.details}
                      </p>

                      <button
                        onClick={() => handleDelete(idx)}
                        className='bg-red-500 hover:bg-red-600 active:scale-95 transition-all duration-300 text-white py-2 px-4 rounded-xl mt-5 w-full font-medium'
                      >
                        Delete
                      </button>

                    </div>
                  )
                })
              ) : (
                <div className='col-span-full text-center text-gray-400 py-10 text-lg'>
                  No Notes Available
                </div>
              )}

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default App