const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'mohammed.elkholy.1995@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the App, ${name}. Let me know how you get along with the App.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'mohammed.elkholy.1995@gmail.com',
        subject: `Good bye, ${name}`,
        text: 'Is there anything we could have done to have kept you on board?'
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}