'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function SectionBreak() {
    return <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.125 }} className='bg-gray-300 dark:bg-gray-400 w-1 rounded-full h-16 my-8 m-auto block'></motion.div>;
}
