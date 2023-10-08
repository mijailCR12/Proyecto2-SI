// "use strict"

// const clientPromise = require('./mongoDB');
// const headers = require('./headersCORS');
// const { uploadImageToStorage } = require('./imageUploader'); // Importa una función para subir imágenes a un servicio de almacenamiento en la nube

// exports.handler = async (event, context) => {

//   if (event.httpMethod == "OPTIONS") {
//     return { statusCode: 200, headers, body: "OK" };
//   }
  
//   try {
// 	const client = await clientPromise;
// 	const data = JSON.parse(event.body);
// 	data._id = parseInt(data._id)
//     console.log(event.body)

// 	await client.db("proyecto").collection("arquitectos").insertOne(data);

//     return { statusCode: 200, headers, body: 'OK'};
//   } catch (error) {
//     console.log(error);
//     return { statusCode: 422, headers, body: JSON.stringify(error) };
//   }
// };


"use strict";

const admin = require("firebase-admin");

// Credenciales del SDK de Firebase Admin (JSON)
const serviceAccount = {
  "type": "service_account",
  "project_id": "proyectosi-50f31",
  "private_key_id": "00f287e551d3145db20157d55463ccc7bea01955",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCWfiCqG3J6iDXe\n1DyC+QyHGnVyOUtrpAP8dFqUhQn2I9P/5nGAV5GEk9tCDKIS4TuPkian6xUOmDAe\nW7T7+ySER/HgGDiKXXl36PqLIrpwcFO4Fm36XY9QstuMe73rcPfEVWdr0OW168g7\nQbGdvOrs1RuE7gQ+wlBPfeQrM1HbLzClQO5vzCELVtjVgnCVEUu8PdJAXDBtab4y\nGd/Vo7X/iGp0Wq3Ux+qe91XWBxiswgN/4Txac0uKXpaagIVJK2pnKZlPprJI2Lfq\n2RFYBXVUmW/CJNxTF5/dahJukbLc+VcWaFwmvikzCikyVCTztBvCcgKRWT82EVHf\naAZ/XOGjAgMBAAECggEANxsBH/jD7v1AaJMjgzvpq/Dyz3wOU2Bv+zmpz1d1wdT1\ntG7v4bRu+vJfJ2zTzgD+W8CC+hq5D6qHeB5Rg7E++lcTyOBll7jJmTBMybTSOwjO\nhwpjg/lNWJndja/j57nqZ9Bz+cU4z+gB3jzcamt6RHV2SbMUB90EJk9tRKpaj1zE\n+GJ/tsEEN5TNvQquHh9XApCYCs9fMx3MmkHfmLzKC1XWbRDViwlNmM6LQwBYuQbh\nj7aNCvE8mFaw9jSktBk1rR/tKFLLDtObbY5wrdKPYADRHaR/DlEQeI5pD9/IDaBu\nzPqAxpw2YrTq4E2D4NCWwk6F5qP2tPRD8p7qfXyp6QKBgQDIB2pm5WYgoCsq3JKt\nMlTxtEl9lk6HlCHhQ5YaJGMzJ3NBRhyhGImJoSyMyUuaSCZUHJJCcWebcGNxDxpY\n5qaMUWbzmxWdb0s8OGjwHYibdkV9TBhA1fih4b+pJDkhF1NU7zW9U8BP8r5EBoYg\n/18LVa01e2ZIgkiBwHYq5X2wGQKBgQDAmk1NrmT3mGg4nMzCsyDqWIWOLN+MSTDo\nsTvjk7V0IGU8WgaHM+qb1WsdsVcjuTwJcGAVqESW5ImqO0BAGgWPh30Jenh0xfAt\nwwced9HNQivCpKvsViUiOb4j3InzixEHQNWhy0CTXLDcCCS+F8wzfFMfgNS7mooX\nwvU9AnOnGwKBgQCd6lTTFQmyeiB6PxbBCzpKc3WNY0tt98FjkLMAwndaXCu+fXZ+\nq9txPz/nicdY7trrjn7dW6Ba87hd+nlnc/hKUL2BVo8S8lkoGrSl0/sUGKQ1jgyb\nqxEV5B4mj0VW3Y5ZQFxhsqvhshcJp0je5h0H2sTasygF2G0bmnDv3quCiQKBgD1R\nouTlbe3KDvxfJ22hXAxgDH08WhuuvayHqLqGr1F+ctypCMUIyVu9sbGtYUHVWoDi\nzyR2AwhLUGzrGkSORFDy4OMgo7MBxbq8CcsweJIxy/7XMIk4z++6lIeUUjNAhjZZ\n9Oni7Pc9nm0fBpuitfd6UHiKKrBjvi1ce3lmC24bAoGABvRLeFsxWf+fyDl1+mHu\nAT2aR5ErpmtaAgpVzK0zAsLMgrUAnwe5m8vdS+w4lWrUQlV0jlYF62K0qn9xghFp\nl+7K1e0KQfF23KYa2kVLRgsZIL3w6034gWvSJAGOVJbCbWgWcdgixXRq2zQ6ijP9\nRGzJ1kaRb6hPgXp+7sIF9Z4=\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-6tjsz@proyectosi-50f31.iam.gserviceaccount.com",
  "client_id": "113545951457209168705",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-6tjsz%40proyectosi-50f31.iam.gserviceaccount.com",
  "universe_domain": "googleapis.com"};

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "proyectosi-50f31.appspot.com" // Reemplaza con el nombre de tu bucket de Firebase Storage
});

const clientPromise = require('./mongoDB');
const headers = require('./headersCORS');

exports.handler = async (event, context) => {
  if (event.httpMethod == "OPTIONS") {
    return { statusCode: 200, headers, body: "OK" };
  }

  try {
    const client = await clientPromise;
    const data = JSON.parse(event.body);
    data._id = parseInt(data._id);

    // Sube la imagen a Firebase Storage
    const bucket = admin.storage().bucket();
    const imageBuffer = Buffer.from(data.imagen, 'base64'); // Asegúrate de que 'imagen' contenga los datos base64 de la imagen
    const fileName = `arquitectos/${data._id}_${Date.now()}.jpg`; // Nombre único para la imagen
    const file = bucket.file(fileName);

    await file.save(imageBuffer, {
      metadata: {
        contentType: 'image/jpeg' // Ajusta el tipo de contenido según el formato de tu imagen
      }
    });

    // Obtiene la URL de la imagen subida
    const imageUrl = `https://firebasestorage.googleapis.com/v0/b/${bucket.name}/o/${encodeURIComponent(fileName)}?alt=media`;

    // Actualiza el campo 'imagen' en los datos del arquitecto con la URL de la imagen
    data.imagen = imageUrl;

    // Guarda los datos del arquitecto en MongoDB
    await client.db("proyecto").collection("arquitectos").insertOne(data);

    return { statusCode: 200, headers, body: 'OK'};
  } catch (error) {
    console.log(error);
    return { statusCode: 422, headers, body: JSON.stringify(error) };
  }
};
