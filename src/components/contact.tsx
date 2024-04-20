"use client"
import React from 'react'
import InViewWrapper from './inViewWrapper'
import ContactContent from './contactContent'
import { motion } from 'framer-motion'


function Contact() {

    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: .3, duration: 1 }}
            viewport={{
                once: true
            }}
        >
            <InViewWrapper id='contact'>
                <ContactContent />
            </InViewWrapper>
        </motion.div>
    )
}

export default Contact
