import React from 'react'
import { useFormStatus } from 'react-dom'
import { SlPaperPlane } from 'react-icons/sl'

export default function ContactSubmitBtn() {
    const { pending } = useFormStatus()


    return (
        <>
            <button disabled={pending} type="submit" className={'text-white my-4 bg-indigo-600 hover:bg-indigo-700 focus:outline-1 focus:outline-black px-8 rounded-md py-1  transition-[.2s] flex items-center justify-center gap-2 ' + (pending ? "brightness-75" : '')}>
                <span className='text-[1rem]'>Send</span>
                <SlPaperPlane fontSize={"1rem"} />
            </button >
        </>
    )
}


