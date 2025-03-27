import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({isDarkMode}) => {
  return (
    <div className='mt-20'>
      <div className='text-center'>
      <Image src={isDarkMode ? assets.portfolio_logo_dark : assets.portfolio_logo} alt='' className='w-36 mx-auto mb-2' />

        <div className='w-max flex items-center gap-2 mx-auto'>
        <Image src={isDarkMode ? assets.mail_icon_dark :  assets.mail_icon} alt='' className='w-6' />
        themdnoorahmed@gmail.com
        </div>
      </div>
<div className='text-center sm:flex items-center  justify-between border-t 
border-gray-400 mx-[10%] mt-12 py-6'>
    <p>© 2024 | Developed by Md Noor Ahmed | All rights reserved</p>
    <ul className='flex items-center justify-center gap-10 mt-4 sm:mt-0'>
        <li> <a target='_blank' href="https://github.com/MdNoorAhmed">GitHub</a> </li>
        <li> <a target='_blank' href="https://www.linkedin.com/in/md-noor-ahmed/">LinkedIn</a> </li>
        <li> <a target='_blank' href="https://github.com/MdNoorAhmed">Twitter</a> </li>

    </ul>
</div>
     

    </div>
  )
}

export default Footer
