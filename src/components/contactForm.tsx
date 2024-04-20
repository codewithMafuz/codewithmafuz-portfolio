import { sendEmailFromContact } from '@/actions/sendEmail'
import React from 'react'
import toast from 'react-hot-toast'
import ContactSubmitBtn from './contactSubmitBtn'

function ContactForm() {
    const formRef = React.useRef<any>(null)

    return (
        <form
            ref={formRef}
            action={async (formData: FormData) => {
                const response: any = await sendEmailFromContact(formData)
                if (response?.data?.id) {
                    formRef.current.reset()
                    return toast.success("Sent email successfully")
                } else {
                    return toast.error("Failed to send message")
                }
            }}
            className="my-24 w-[360px] lg:w-[600px] xl:w-[600px]">
            <div className="flex flex-col">
                <label htmlFor="contactName" className="text-[1.1rem]">Your Name (Optional)</label>
                <input type="text" id="contactName" minLength={3} maxLength={200} name="contactName" placeholder="Your Name" className="px-1 pl-2 ml-1 mt-1 py-1 text-[1rem] border border-gray-400 dark:bg-white/95 dark:text-black rounded-md focus:outline-none focus:ring focus:ring-gray-800 outline-black/30" />
            </div>
            <div className="flex flex-col mt-6">
                <label htmlFor="contactEmail" className="text-[1.1rem]" >Your Email</label>
                <input type="email" id="contactEmail" name="contactEmail" placeholder="your-email@example.com" required className="px-1 pl-2 ml-1 mt-1 py-1 text-[1rem] border border-gray-400 dark:bg-white/95 dark:text-black rounded-md focus:outline-none focus:ring focus:ring-gray-800 outline-black/30" />
            </div>
            <div className="flex flex-col mt-6">
                <label htmlFor="contactMessage" className='text-[1.1rem]'>Message</label>
                <textarea required minLength={5} maxLength={1000} name="contactMessage" id="contactMessage" cols={40} rows={4} className="px-1 pl-2 ml-1 mt-1 py-1 text-[1rem] border border-gray-400 dark:bg-white/95 dark:text-black rounded-md focus:outline-none focus:ring focus:ring-gray-800 outline-black/30"></textarea>
            </div>
            <div className="flex justify-center">
                <ContactSubmitBtn />
            </div>
        </form>
    )
}

export default ContactForm
