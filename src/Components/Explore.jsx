import React from 'react'
import ExploreCards from './ExploreCards'

const Explore = () => {
  return (
    <div id='Explore' className='bg-gray-100 container mx-auto w-11/12'>
        {/* Explore Categories */}
        <div className='flex justify-center items-center py-10'>
            <h1 className='font-semibold font-Manrope text-[28px]'>Explore Categories</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {/* Card 1 */}
        <ExploreCards
          imageUrl="/src/assets/Vector-1.png"
          Heading="Creative Writting"
          text="fiction, poetry and narrative explorations"
        />
           {/* Card 2 */}
        <ExploreCards
          imageUrl="/src/assets/mage_book.png"
          Heading="Literal Analysis"
          text="Deep dives into themes, styles, and meanings"
        />
           {/* Card 3 */}
        <ExploreCards
          imageUrl="/src/assets/iconoir_light-bulb.png"
          Heading="Personal Growth"
          text="Self-discovery through the written word"
        />
           {/* Card 4 */}
        <ExploreCards
          imageUrl="/src/assets/heroicons_wrench-screwdriver.png"
          Heading="Craft & Techniques"
          text="Mastering the tools of effective writing"
        />
           {/* Card 5 */}
        <ExploreCards
          imageUrl="/src/assets/solar_microphone-outline.png"
          Heading="Cultural Commentary"
          text="Perspectives on society and human experience"
        />
           {/* Card 6 */}
        <ExploreCards
          imageUrl="/src/assets/Group.png"
          Heading="Prefessional Writing"
          text="Career insights for writers and editors"
        />
           {/* Card 7 */}
        <ExploreCards
          imageUrl="/src/assets/majesticons_heart-line.png"
          Heading="Wellness & Mindfulness"
          text="Writing as a path to mental wellbeing"
        />
           {/* Card 8 */}
        <ExploreCards
          imageUrl="/src/assets/Vector.png"
          Heading="Historical Perspective"
          text="Learning from writers across time"
        />


        </div>
    </div>
  )
}

export default Explore