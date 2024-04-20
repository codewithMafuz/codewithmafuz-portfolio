'use client';
import React from 'react';
import SectionHeading from './sectionHeading';
import { motion } from 'framer-motion';
import InViewWrapper from './inViewWrapper';
import AboutContent from './aboutContent';

function About() {

    return (
        <InViewWrapper key='about' id='about' extraClassNames='overflow-y-hidden'>
            <motion.section initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.175 }} className='my-16 max-w-[45rem] text-center mb-1 leading-8 sm:mb-2'>
                <AboutContent />
            </motion.section>
        </InViewWrapper>
    );
}

export default About;
