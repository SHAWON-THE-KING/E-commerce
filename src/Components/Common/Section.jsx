import React from 'react'

const Section = ({section}) => {
    return (
        <>
            <div className='flex items-center gap-5'>
                <div className='h-10 w-5 bg-orange-600 rounded-[5px]'></div>
                <h1 className='text-orange-600 font-semibold'>{section}</h1>
            </div>
        </>
    )
}

export default Section