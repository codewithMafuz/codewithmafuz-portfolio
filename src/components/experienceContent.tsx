import React from 'react'


export default function ExperienceContent({ experience }: { experience: any }) {
    return (
        <>
            <a href={experience.url || ''} target='_blank' className='hover:underline cursor-pointer font-bold text-[1.1rem] lg:text-[1.2rem] w-[fit-content]' >{experience.title}</a>
            <h5 className="font-[800] text-[1rem] lg:text-[1.1rem]">{experience.location}</h5>
            <p className='font-normal text-[.8rem] lg:text-[.95rem]'>{experience.description}</p>
        </>
    )
}


