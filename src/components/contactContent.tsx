import React, { } from 'react'
import SectionHeading from './sectionHeading'
import { FaLinkedin } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { sentToWindowURL } from './windowNewUrl';
import ContactForm from './contactForm';


export default function ContactContent() {
    return (
        <div className='flex items-center justify-center flex-col dark:text-gray-200'>
            <SectionHeading>Contact me</SectionHeading>
            <div className="flex flex-col items-center justify-center gap-1 min-w-full">
                <h4 className='my-2 text-center w-full px-2'>You can contact by sending mail also at <span className='font-bold'  >{"contact.codewithmafuz@gmail.com"}</span></h4>
                <div className='flex flex-row justify-center gap-2 lg:gap-6 mt-4'>
                    <div className="flex justify-center tooltip text-[2rem]" data-tip="lets go to send message on linkedin" >
                        <FaLinkedin
                            onClick={() => sentToWindowURL("https://www.linkedin.com/in/mafuzur-rahman-126559215/")}
                            className='text-[1.3rem] xl:text-[1.8rem] hover:brightness-90 hover:scale-1.05 transition-[.2s] cursor-pointer' />
                    </div>
                    <div className="flex justify-center tooltip text-[2rem]" data-tip="lets go to send message on gmail" >
                        <SiGmail
                            onClick={() => sentToWindowURL("https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcSMVlCVlQjgLrlKjxlrvWgcMQHrvBNMHMgqNMxzgsWssMRXppxVgdvzbcTblCRGbSdnksQKq")}
                            className='text-[1.3rem] xl:text-[1.8rem] hover:brightness-90 hover:scale-1.05 transition-[.2s] cursor-pointer' />
                    </div>
                </div>
            </div>
            <ContactForm />
        </div>
    );
}


