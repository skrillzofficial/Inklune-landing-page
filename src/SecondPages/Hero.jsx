import React from 'react'
import Profilecard from '../assets/Carousel Image.jpg'
import HeroCard from './HeroCard'

const Hero = () => {
  return (
    <div className='flex gap-2 items-center mt-5'>
        {/* Carousel */}
        <HeroCard
          imageUrl={Profilecard}
          Title="Creative Writting"
          Story="fiction, poetry and narrative explorations"
        />
        <HeroCard
          imageUrl={Profilecard}
          Title="Creative Writting"
          Story="fiction, poetry and narrative explorations"
        />
        <HeroCard
          imageUrl={Profilecard}
          Title="Creative Writting"
          Story="fiction, poetry and narrative explorations"
        />
        <HeroCard
          imageUrl={Profilecard}
          Title="Creative Writting"
          Story="fiction, poetry and narrative explorations"
        />
        <HeroCard
          imageUrl={Profilecard}
          Title="Creative Writting"
          Story="fiction, poetry and narrative explorations"
        />
        <HeroCard
          imageUrl={Profilecard}
          Title="Creative Writting"
          Story="fiction, poetry and narrative explorations"
        />
        <HeroCard
          imageUrl={Profilecard}
          Title="Creative Writting"
          Story="fiction, poetry and narrative explorations"
        />

    </div>
  )
}

export default Hero