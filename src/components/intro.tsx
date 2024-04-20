'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { FaGithubSquare } from 'react-icons/fa';
import InViewWrapper from './inViewWrapper';
import IntroContent from './introContent';
import { imgLinks } from '@/lib/data';

function Intro() {

    return (
        <InViewWrapper key='home' id='home'>

            <section className='overflow-hidden'>
                <div className='flex items-center justify-center'>
                    <div className='relative'>
                        <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: 'tween', duration: '.2' }}>
                            <Image className='rounded-full h-24 w-24 object-cover border-[0.35rem] border-gray-50 dark:border-gray-400 transition shadow-xl' src={imgLinks.linkedin} alt='mafuzur rahman profile photo' width='194' height='194' quality={95} priority={true} />
                        </motion.div>
                        <motion.span
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1, rotate: [0, -10, 0, 10, 0] }}
                            transition={{
                                type: 'spring',
                                stiffness: 300,
                                delay: 0.1,
                                duration: 0.8,
                                loop: Infinity,
                            }}
                            className='absolute bottom-2 right-0 text-3xl'
                        >
                            👋
                        </motion.span>
                    </div>
                </div>
                <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} className='py-2'>
                    <IntroContent />
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} className='flex flex-col sm:flex-row items-center justify-center gap-2 font-medium pt-2'>
                    <Link href={'#contact'} className='font-medium text-[18px] bg-dark text-white gap-2 px-7 py-2 flex items-center rounded-full hover:scale-[.9] opacity-[.9] transition'>
                        Contact Me Here
                        <BsArrowRight />
                    </Link>
                    <a href={'/CV.pdf'} target='__blank' className='font-medium text-[18px] bg-white text-dark gap-2 px-7 py-2 flex items-center rounded-full hover:scale-[.9] opacity-[.9] transition'>
                        Download Resume
                        <HiDownload />
                    </a>
                    <a target='__blank' href={'https://www.linkedin.com/in/mafuzur-rahman-126559215/'} className='font-medium text-[18px] bg-white text-dark gap-2 px-4 py-2 sm:py-4 flex items-center rounded-full hover:scale-[.9] opacity-[.9] transition'>
                        <BsLinkedin />
                    </a>
                    <a target="_blank" href={'https://github.com/codewithMafuz'} className='font-medium text-[18px] bg-white text-dark gap-2 px-4 py-2 sm:py-4 flex items-center rounded-full hover:scale-[.9] opacity-[.9] transition'>
                        <FaGithubSquare />
                    </a>
                </motion.div>
            </section>
        </InViewWrapper>
    );
}

export default Intro;
