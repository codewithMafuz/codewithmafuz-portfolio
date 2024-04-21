"use client"
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { useActiveSectionContext } from '../context/activeSectionContext'

type InViewWrapperProps = {
    children: React.ReactNode,
    id: string,
    onViewStateChange?: (isInView: boolean) => void,
    extraClassNames?: string,
}

const InViewWrapper = ({
    children,
    id,
    onViewStateChange = (isInView: boolean) => { },
    extraClassNames = '',
}: InViewWrapperProps) => {
    const { ref, inView } = useInView({
        rootMargin: '-50% 0px -50% 0px',
    })
    const setActiveSection = useActiveSectionContext().setActiveSection

    useEffect(() => {
        if (inView) {
            setActiveSection(id)
            onViewStateChange(inView)
        }
    }, [inView, id, setActiveSection, onViewStateChange])

    return (
        <div className={'overflow-x-hidden lg:scroll-mt-[74px] dark:text-gray-200 ' + extraClassNames} ref={ref} id={id}>{children}</div>
    )
}

export default InViewWrapper
