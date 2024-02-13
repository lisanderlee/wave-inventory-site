import { NextResponse, NextRequest } from 'next/server'
const nodemailer = require('nodemailer');

// Handles POST requests to /api


export async function POST(request) {

    const username = "esobol@gmail.com";
    const password = "mfoctynrvifakfme";
    const myEmail = "info@waveinventory.io";


    console.log("dealing with request")
    const formData = await request.formData()
    const name = formData.get('name')
    const last = formData.get('last')
    const email = formData.get('email')
    const company = formData.get('company')
    const tel = formData.get('tel')
    const message = formData.get('message')


    // create transporter object
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
    

        auth: {

            user: username,
            pass: password
        }
    });

    try {

        const mail = await transporter.sendMail({
            from: username,
            to: myEmail,
            replyTo: email,
            subject: `Website activity from ${email}`,
            html: `
            <p>Name: ${name} </p>
            <p>Last-Name: ${last} </p>
            <p>Compnay: ${company} </p>
            <p>Phone: ${tel} </p>
            <p>Email: ${email} </p>
            <p>Message: ${message} </p>
            `,
        })

        return NextResponse.json({ message: "Success: email was sent" })

    } catch (error) {
        console.log(error)
        NextResponse.status(500).json({ message: "COULD NOT SEND MESSAGE" })
    }


}