import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Work = ({ isDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id='work'
      className='w-full px-[12%] py-10 scroll-mt-20'
    >

      {/* Section Titles */}
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        className='text-center mb-2 text-lg font-Ovo'
      >
        My Portfolio
      </motion.h4>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='text-center text-5xl font-Ovo'
      >
        My latest work
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'
      >
        Welcome to my web development portfolio! Explore a collection of projects
        showcasing my expertise in front-end development
      </motion.p>

      {/* Projects Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className='grid grid-cols-auto my-10 gap-8 dark:text-black'
      >
        {workData.map((project, index) => (
          <motion.a
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.3 }}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            className='aspect-square bg-no-repeat bg-cover bg-center rounded-xl shadow-lg relative cursor-pointer group overflow-hidden transition-shadow duration-300 hover:shadow-2xl'
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            {/* Overlay for better text readability */}
            <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300 rounded-xl' />

            {/* Card Content */}
            <div className='absolute bottom-5 left-1/2 -translate-x-1/2 w-11/12 bg-white/90 rounded-md py-4 px-6 flex items-center justify-between shadow-md backdrop-blur-sm group-hover:bottom-7 transition-all duration-500'>
              <div>
                <h2 className='font-semibold'>{project.title}</h2>
                <p className='text-sm text-gray-700'>{project.description}</p>
              </div>
              <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
                <Image src={assets.send_icon} alt='send icon' className='w-5' />
              </div>
            </div>
          </motion.a>
        ))}
      </motion.div>

      {/* Show More Button */}
      <motion.a
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.1, delay: 0.5 }}
        href="https://github.com/MdNoorAhmed"
        target="_blank"
        rel="noopener noreferrer"
        className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover shadow-md hover:shadow-lg transition-shadow'
      >
        Show more
        <Image src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} alt='Right arrow' className='w-4' />
      </motion.a>

    </motion.div>
  )
}

export default Work
