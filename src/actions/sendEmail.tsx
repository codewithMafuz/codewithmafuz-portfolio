"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESET_API_KEY)


export const sendEmailFromContact = async (formData: FormData) => {
    const name = formData.get('contactName') || 'No name'
    const email = formData.get('contactEmail')
    const message = formData.get('contactMessage')

    if (!name || !email || !message) {
        return { error: "name, email or message empty" }
    }
    if (typeof (name) !== "string" || name.length > 200 || typeof (email) !== "string" || email.length > 200 || typeof (message) !== "string" || message.length > 1000) {
        return { error: "name, email or message either empty or invalid" }
    }
    try {
        const response = await resend.emails.send({
            from: `Contact form message by ${name as string} <onboarding@resend.dev>`,
            to: "contact.codewithmafuz@gmail.com",
            reply_to: "contact.codewithmafuz@gmail.com",
            subject: "Sent message from portfolio contact by " + name as string,
            html: `<p>from email : ${email as string}</p><p>${message as string}</p>`
        })
        return response
    } catch (error: any) {
        return { error: error?.message || "something went wrong" }
    }

}
