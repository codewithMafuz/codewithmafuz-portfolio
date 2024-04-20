"use client"
import React from 'react'
import InViewWrapper from './inViewWrapper'
import SectionHeading from './sectionHeading'
import { motion } from 'framer-motion'
import { skillsData } from '@/lib/data'

const variants = {
    initial: { opacity: 0, y: 100 },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: .04 * index
        }
    })
}

function Skills() {

    return (
        <InViewWrapper key="skills" id='skills' >
            <section className='overflow-hidden'>
                <SectionHeading>Skills</SectionHeading>
                <ul className='w-full flex flex-wrap gap-x-8 gap-y-2 justify-center py-4 px-1 md:px-6 lg:px-32 xl:px-40'>

                    {skillsData.map((skill, index) => (
                        <motion.li
                            key={index}
                            variants={variants}
                            initial={"initial"}
                            whileInView="animate"
                            className='tooltip rounded-full'
                            viewport={{ once: true }}
                            data-tip={skill.description}

                            custom={index}
                        >
                            <button className="btn bg-gray-100 dark:bg-gray-600 dark:text-gray-200  hover:bg-slate-200 dark:hover:bg-slate-800 rounded-[20px] px-4 py-[1px] border font-normal border-gray-300">{skill.name}</button>
                        </motion.li>
                    ))}

                </ul>
            </section>
        </InViewWrapper>
    )
}

export default Skills
