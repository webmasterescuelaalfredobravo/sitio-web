// DEVUELVE EL CODIGO DE PAGO DE UN ALUMNO LEYENDO EL CSV INDICADO EN EL PARAM URL
// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
// para invocar esta función desde netlify dev usar este comando:
// netlify functions:invoke  busqueda-codigo-pago --no-identity --querystring "documento=44204799&url=http://localhost:8000/img/alumnos.csv"
const Parser = require('./lib/parser');
exports.handler = async (event, context) => {
  // To enable CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, Accept',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
  };
  try {

    if (event.httpMethod === 'OPTIONS') {

      return {
        statusCode: 200, // <-- Must be 200 otherwise pre-flight call fails
        headers,
        body: 'This was a preflight call!'
      };
    } else {
      const { queryStringParameters: { documento = null } = {} } = event;
      const { queryStringParameters: { url = null } = {} } = event;


      // console.log("queryStringParameters", event.queryStringParameters);
      // console.log("queryStringParameters", event);
      if (!documento && !url) {
        throw (`no 'url' or 'documento' property given`);
      }
console.log("procesando....")
      // EL CSV ORIGINAL TRAE COMO CABECERA EL CAMPO D.N.I. que la libreria no resuelve bien, por eso se reemplazan los puntos por _
      const parser = new Parser();
      var xxx = await parser.parseEvent({ url: url, options: { delimiter: { field: ';' , eol: '\r\n' }, keys: ['D_N_I_', 'CODIGO ELECTRONICO'] } });
      const result = xxx.filter(unRegistro => {
        console.log(unRegistro.D_N_I_);
        return unRegistro.D_N_I_ && String(unRegistro.D_N_I_) === documento;
      });

      if (result && result.length && result[0]['CODIGO ELECTRONICO']) {
        return {
          statusCode: 200,
          headers,
          body: JSON.stringify({ codigo: result[0]['CODIGO ELECTRONICO'] }),
          // // more keys you can return:
          // headers: { "headerName": "headerValue", ... },
          // isBase64Encoded: true,
        };
      } else {
        return { statusCode: 400, headers, body: "No se encontró código de pago" };
      }
    }
  } catch (err) {
    return { statusCode: 500, headers, body: err.toString() };
  }
};
