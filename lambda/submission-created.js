/**
 * GESTIÓN DE ENVIOS DE FORMS. ESTE SCRIPT ES LLAMADO AUTOMATICAMENTE POR NETLIFY
 * CADA VEZ QUE SE ENVÍA UN FORM DE CONTACTO.
 * 
 * esta función utiliza los servicios de mailjet para el envío de mail
 * 
 * @see https://docs.netlify.com/functions/trigger-on-events/#available-triggers
 * @see https://css-tricks.com/using-netlify-forms-and-netlify-functions-to-build-an-email-sign-up-widget/
 */

function sendEmail(subject, message, senderEmail, senderName, destinatarioEmail) {
    return new Promise((fulfill, reject) => {
        const mailjet = require('node-mailjet')
            .connect(MAILJET_APIKEY_PUBLIC, MAILJET_APIKEY_PRIVATE);
        const request = mailjet
            .post("send", { 'version': 'v3.1' })
            .request({
                "Messages": [
                    {
                        "From": {
                            "Email": senderEmail,
                            "Name": senderName
                        },
                        "To": [
                            {
                                "Email": destinatarioEmail,
                                "Name": destinatarioEmail
                            }
                        ],
                        "Subject": subject,
                        "TextPart": message,
                        "CustomID": "NetlifySubmissionCreated"
                    }
                ]
            });
        request
            .then((result) => {
                fulfill(result.body);
            })
            .catch((err) => {
                reject(err.statusCode);
            });

    });
}

exports.handler = async (event, context, callback) => {
    const {
        SENDGRID_API_KEY,
        SENDGRID_SENDER_NAME,
        SENDGRID_SENDER_EMAIL,
        DESTINATARIO_AD,   /*ADMINISTRACION*/
        DESTINATARIO_RL,   /*REPRESENTANTE LEGAL*/
        DESTINATARIO_DI,   /*DIRECTORA*/
        DESTINATARIO_PI   /*PRE-INSCRIPCIONES*/
    } = process.env;


    const email = JSON.parse(event.body).payload.data.email;
    const destinatarioPx = JSON.parse(event.body).payload.data.destinatario;
    const mensaje = JSON.parse(event.body).payload.data.message;
    let destinatario = "";
    console.log(event.body);
    console.log(`Mailjet service requerido: Recieved a submission: ${email} para destino:  ${destinatario}. Texto:  ${mensaje}. `);
    if (email && destinatarioPx && mensaje) {
        // el destinatario es un codigo
        switch (destinatarioPx) {
            case 'AD':
                destinatario = DESTINATARIO_AD;
                break;
            case 'RL':
                destinatario = DESTINATARIO_RL;
                break;
            case 'DI':
                destinatario = DESTINATARIO_DI;
                break;
            case 'PI':
                destinatario = DESTINATARIO_PI;
                break;
            default:
                break;
        }

        const mensajeAEnviar = `Se ha recibido un mensaje desde la página web (https://escuelaalfredobravo.edu.ar/contact). De: ${email} . Texto:  ${mensaje}`;
        const subject = `Mensaje enviado desde la página de contacto del sitio web escuelaalfredobravo.edu.ar`;



        sendEmail(
            subject,
            mensajeAEnviar,
            SENDGRID_SENDER_EMAIL,
            SENDGRID_SENDER_NAME,
            destinatario
        )
            .then(response => {
                console.log("envio ok", response);
                callback(null, { statusCode: response.statusCode });
            })
            .catch(err => {
                console.log("envio con error", err);
                callback(err, null);
            });
    }

};