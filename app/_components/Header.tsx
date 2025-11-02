import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const MenuOptions =[
    {
        name: 'Pricing',
        path: '/pricing'
    },
    {
        name: 'Contact Us',
        path: '/contactus'
    }
]

const Header = () => {
    return (
    
        <div className=' flex item-center justify-between'>
            {/*Logo */}
            <div className='flex gap-2 items-center'>
                <Image src={'/logo.svg'} alt='logo' width={35} height={35} />
                <div className='font-bold text-xl'><h2> Forma AI </h2></div>
            </div>

            {/*Menu Options */}
            <div className='flex gap-3'>
                {MenuOptions.map((menu,index) => 
                <Button variant={'ghost'} key={index}>{menu.name}</Button>)}
            </div>

            {/*Get Started button */}
            <div>
                <Button>Get Started <ArrowRight/></Button>
            </div>
        </div>
    )
}


export default Header