/**
 * GESTIÓN DE ENVIOS DE FORMS. ESTE SCRIPT ES LLAMADO AUTOMATICAMENTE POR NETLIFY
 * CADA VEZ QUE SE ENVÍA UN FORM DE CONTACTO.
 * @see https://docs.netlify.com/functions/trigger-on-events/#available-triggers
 * @see https://css-tricks.com/using-netlify-forms-and-netlify-functions-to-build-an-email-sign-up-widget/
 * @see https://rosso.codes/blog/send-email-using-netlify-functions-and-sendgrid-api/
 */
const client = require("@sendgrid/mail");

function sendEmail(client, message, senderEmail, senderName, destinatarioEmail) {
    return new Promise((fulfill, reject) => {
        const data = {
            from: {
                email: senderEmail,
                name: senderName
            },
            subject: 'Mensaje desde la página web',
            to: destinatarioEmail,
            html: `${message}`
        };
        console.log(data);
        client
            .send(data)
            .then(([response, body]) => {
                fulfill(response);
            })
            .catch(error => reject(error));
    });
}

exports.handler = async (event, context,callback) => { 
    const {
        SENDGRID_API_KEY,
        SENDGRID_SENDER_NAME,
        SENDGRID_SENDER_EMAIL,
        DESTINATARIO_AD,   /*ADMINISTRACION*/
        DESTINATARIO_RL   /*REPRESENTANTE LEGAL*/
    } = process.env;


    const email = JSON.parse(event.body).payload.data.email;
    const destinatarioPx = JSON.parse(event.body).payload.data.destinatario;
    const mensaje = JSON.parse(event.body).payload.data.message;
    let destinatario = "";
    console.log(event.body);
    console.log(`Recieved a submission: ${email} para destino:  ${destinatario}. Texto:  ${mensaje}`);
    if (email && destinatarioPx && mensaje) {
        // el destinatario es un codigo
        switch (destinatarioPx) {
            case 'AD':
                destinatario = DESTINATARIO_AD;
                break;
            case 'RL':
                destinatario = DESTINATARIO_RL;
                break;
            default:
                break;
        }

        const mensajeAEnviar = `Se ha recibido un mensaje desde la página web (https://escuelaalfredobravo.edu.ar/contact). De: ${email} . Texto:  ${mensaje}`;


        client.setApiKey(SENDGRID_API_KEY);

        sendEmail(
            client,
            mensajeAEnviar,
            SENDGRID_SENDER_EMAIL,
            SENDGRID_SENDER_NAME,
            destinatario
        )
            .then(response => {
                console.log("envio ok",response);
                callback(null, { statusCode: response.statusCode });
            })
            .catch(err => {
                console.log("envio con error",err);
                callback(err, null);
            });
    }

};