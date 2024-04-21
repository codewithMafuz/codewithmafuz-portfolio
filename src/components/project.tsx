'use client';
import { projectsData } from '@/lib/data';
import { useRef } from 'react';
import { useScroll, motion } from 'framer-motion';
import Image from 'next/image';
import { sentToWindowURL } from './windowNewUrl';
import Link from 'next/link';

type ProjectProps = (typeof projectsData)[number];

export default function Project({ id, title, description, tags, imageUrl, projectUrl }: ProjectProps) {
    const projectRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: projectRef,
        offset: ['0 1', '1.33 1'],
    });

    return (
        <motion.div
            id={'project' + { id }}
            className=''
            style={{
                opacity: scrollYProgress,
                scale: scrollYProgress,
            }}
            ref={projectRef}
        >
            <section className={'mx-3 md:mx-1 h-auto my-8 p-1 md:p-2 flex gap-[20px] md:gap-[6px] bg-gray-100 dark:bg-gray-600 transition-colors max-w-[56rem] border border-black/5 overflow-hidden sm:pr-8 flex-col justify-center items-center hover:scale-[1.05] shadow-sm ' + (id % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse')}>
                <div className='p-1 sm:p-2 xl:p-3 '>
                    <h3 className='text-center my-2'>
                        <a href={projectUrl || "#"} target='_blank' style={{fontFamily : "Arial, serif"}} className='!text-black dark:!text-gray-200 !px-1 !cursor-pointer hover:!underline !text-[1.3rem] lg:!text-[2rem] !text-center !font-[100]'>
                            {title}
                        </a>
                    </h3>
                    <p className='text-lg leading-relaxed'>{description}</p>
                    <ul className='flex flex-wrap gap-2 my-2'>
                        {tags.map((tag, index) => (
                            <li className='bg-dark/[0.5] dark:bg-dark text-[0.7rem] text-white dark:text-gray-200 rounded-full px-3 py-[1px] hover:scale-[1.05] transition-[.5ms]' key={index}>
                                {tag}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className=''>
                    <Image className={'dark:brightness-90 shadow-lg w-full h-[280px] md:h-fit md:hover:rotate-[0deg] transition-[.5ms] ' + (id % 2 === 0 ? 'md:rotate-[-5deg]' : 'md:rotate-[5deg]')} quality={95} width={2000} height={2000} src={imageUrl} alt={title} />
                </div>
            </section>
        </motion.div>
    );
}
