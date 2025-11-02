import React from 'react'
import { Button } from '@/components/ui/button'
import { ImagePlus, ArrowUp } from 'lucide-react'

const suggestion ={
    label: ''
}


const Hero = () => {
    return (
        <div className=' flex flex-col items-center h-[80vh] justify-center'>
            {/* Header & Description */}
            <h2 className='font-bold text-6xl'>Build what you imagine</h2>
            <p className='mt-2 text-xl text-gray-500'>Imagine, Generate and Edit your design with a single prompt. Export to Code</p>
            {/* input box */}
            <div className='w-full max-w-xl p-5 border mt-5 rounded-2xl'>
                <textarea placeholder='Describe your design'
                    className='w-full h-24 focus:outline-none focus:ring-0 resize-none'
                    />
                <div className='flex justify-between items-center'>
                    <Button variant={'ghost'} size={'icon'}><ImagePlus /></Button>
                    <Button> <ArrowUp/></Button>
                </div>
            </div>


            {/* suggestion list */}
        </div>
    )
}

export default Hero