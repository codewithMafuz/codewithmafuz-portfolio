"use client"
import React from 'react'
import InViewWrapper from './inViewWrapper'
import SectionHeading from './sectionHeading'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from '../lib/data';
import ExperienceContent from './experienceContent';
import { useThemeContextProvider } from '../../context/themeContext';

function Experience() {
    const { theme } = useThemeContextProvider()
    const isLight = theme === "light"

    return (
        <InViewWrapper id={"experience"}>
            <section className='my-8 min-w-[98vw] lg:min-w-[80vw] p-0 m-0 overflow-x-hidden dark:text-gray-900 dark:border-[lightgray]'>
                <SectionHeading>Experience</SectionHeading>
                <VerticalTimeline lineColor={isLight ? 'lightgray' : "darkgray"}>
                    {experiencesData.map((experience, index) =>
                        <React.Fragment key={index}>
                            <VerticalTimelineElement
                                contentStyle={{
                                    boxShadow: 'none',
                                    background: isLight ? 'whitesmoke' : "lightgray",
                                    border: '1px solid lightgray',
                                    borderRadius: '15px'
                                }}
                                contentArrowStyle={{
                                    borderRight: isLight ? '10px solid gray' : "10px solid lightgray"
                                }}
                                date={experience.date}
                                icon={experience.icon}
                                iconStyle={{
                                    border: isLight ? "white" : "lightgray",
                                    fontSize: '2rem',
                                    background: isLight ? 'white' : "lightgray",
                                }}
                                className=''>
                                <ExperienceContent experience={experience} />
                            </VerticalTimelineElement>
                        </React.Fragment>
                    )}
                </VerticalTimeline>
            </section>
        </InViewWrapper>
    )
}

export default Experience
