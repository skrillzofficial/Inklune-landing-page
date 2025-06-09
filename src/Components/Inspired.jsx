import React, {useState}  from 'react'

const Inspired = () => {
    const [email, setEmail] = useState("")
    const [error, setError] = useState("")

     const handleSubmit = (e)=>{
        e.preventDefault()

        if (!email.trim() && !email.includes('@')){
        setError("Please fill out the input field correctly")
    }
    console.log(email)
    setEmail("")
    }
  return (
    <div className='container mx-auto w-11/12'>
      {/* Inspired Section */}
      <div className="px-4 sm:px-6 max-w-7xl ">
        <div className='bg-gray-100 text-center py-10'>
          <h1 className='text-[24px] sm:text-[24px] md:text-[24px] font-semibold text-gray-800 mb-4 sm:mb-6'>
            Stay Inspired
          </h1>
          <p className='text-gray-600 text-base sm:text-[16px] md:text-[16px] max-w-2xl mx-auto mb-6 sm:mb-8'>
            Receive weekly writing prompts, featured stories, and community highlights directly in your inbox.
          </p>
          
          <div className='flex flex-col sm:flex-row gap-3 items-center justify-center mx-auto'>
            <input 
              type="email" 
              placeholder='Your Email Address' 
              className='flex gap-1 w-[200px] md:w-[300px] lg:w-[500px] rounded-lg border py-2 px-3 border-gray-300 
              'value={email} onChange={(event)=>setEmail(event.target.value)}
            />
            
            <button onClick={handleSubmit} className='px-6 py-3 sm:px-8 bg text-white font-medium rounded-lg hover:bg-purple-700 transition-colors'>
              Subscribe
            </button>
          </div>
          <p className="text-red-900 block">{error}</p>
          
          <p className='text-xs sm:text-sm text-gray-500 mt-4 max-w-lg mx-auto'>
            By subscribing, you agree to our Privacy Policy and to receive our emails.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Inspired