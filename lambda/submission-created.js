/**
 * GESTIÓN DE ENVIOS DE FORMS. ESTE SCRIPT ES LLAMADO AUTOMATICAMENTE POR NETLIFY
 * CADA VEZ QUE SE ENVÍA UN FORM.
 * @see https://docs.netlify.com/functions/trigger-on-events/#available-triggers
 * @see https://css-tricks.com/using-netlify-forms-and-netlify-functions-to-build-an-email-sign-up-widget/
 */
require('dotenv').config();
const fetch = require('node-fetch');
const { EMAIL_TOKEN } = process.env;
exports.handler = async event => {
    const email = JSON.parse(event.body).payload.email;
    const destinatario = JSON.parse(event.body).payload.destinatario;
    console.log(`Recieved a submission: ${email} para destino:  ${destinatario}`);
    return fetch('https://api.buttondown.email/v1/subscribers', {
        method: 'POST',
        headers: {
            Authorization: `Token ${EMAIL_TOKEN}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
    })
        .then(response => response.json())
        .then(data => {
            console.log(`Submitted to Buttondown:\n ${data}`);
        })
        .catch(error => ({ statusCode: 422, body: String(error) }));
};