import React from 'react'

function ProductDescription() {
  return (
    <div className='max-padd-container py-14 bg-container'>
        <div className='flex gap-3 mb-4 '>
            <button className='btn-dark rounded-sm !text-xs !py-[6px] w-36'>Description</button>
            <button className='btn-dark-outline rounded-sm !text-xs !py-[6px] w-36'>Care Guide</button>
        </div>
        <div className='flex  pb-8'>
            <p className='text-sm'>At Cake Factory, we are experimenting with food and happiness alongside our seasoned crew with a passion for the phenomenal. Finest quality ingredients transform to legends at the hands of these master craftsmen and make their way to your hearts. And festivity is our second nature, the spirits are always soaring and so are creativity</p>
        </div>
    </div>
  )
}

export default ProductDescription;