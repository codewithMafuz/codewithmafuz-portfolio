'use client';
import { motion } from 'framer-motion';
import { links } from '@/lib/data';
import Link from 'next/link';
import clsx from 'clsx';
import { useActiveSectionContext } from '../context/activeSectionContext';
export const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1)


export default function Header() {
    const { activeSection, setActiveSection } = useActiveSectionContext()

    return (
        <motion.header initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className='z-50 w-screen h-auto min-h-[30px] flex items-center justify-center fixed top-0 rounded-none sm:top-4 hover :op-'>
            {' '}
            <nav className='flex items-center w-full sm:w-[600px] rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] py-2 sm:rounded-full opacity-80 hover:opacity-100'>
                <ul className='w-full flex justify-center items-center flex-wrap gap-y-2'>
                    {links.map((link) => {
                        const isActive = activeSection === link.name;
                        return (
                            <li className='relative px-3 mx-1 sm:px-1 md:px-0.5 md:mx-2 hover:font-medium' key={link.hash}>
                                <Link
                                    className={clsx('', {
                                        'font-medium': isActive,
                                    })}
                                    onClick={() => setActiveSection(link.name)}
                                    href={link.hash}
                                >
                                    {capitalize(link.name)}
                                </Link>
                                {
                                    isActive &&
                                    (
                                        <motion.span
                                            transition={{
                                                type: 'spring',
                                                stiffness: 380,
                                                damping: 30,
                                            }}
                                            layoutId='activeSection'
                                            className={clsx('absolute -z-10 h-full rounded-full left-[-10px] w-[calc(100%+20px)] transition-[.2ms]', {
                                                'bg-gray-200': isActive,
                                            })}
                                        ></motion.span>
                                    )}
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </motion.header>
    );
}
