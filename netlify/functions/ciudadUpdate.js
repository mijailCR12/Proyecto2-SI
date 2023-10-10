"use strict"

// const clientPromise = require('./mongoDB');
const headers = require('./headersCORS');

const rabbitPromise = require('./rabbitMQ');
exports.handler = async (event, context) => {

  if (event.httpMethod == "OPTIONS") {
    return { statusCode: 200, headers, body: "OK" };
  }

  try {
    // const client = await clientPromise;
    const id = parseInt(event.path.split("/").reverse()[0]);
    // const data = JSON.parse(event.body);
	// Realiza la actualización del libro en la base de datos
  // const result = await client.db("proyecto").collection("ciudades").updateOne(
  //   { _id: id },
  //   { $set: data } // Usamos los datos recibidos para actualizar el libro
  // ); 
  // return { statusCode: 200, headers, body: 'Libro actualizado correctamente' };
  // } catch (error) {
  //   console.log(error);
  //   return { statusCode: 422, headers, body: JSON.stringify(error) };
  // }
    const channel = await rabbitPromise();
    const request = `{'method':'UPDATE','id':${id},'body':${event.body}}`;
    await channel.sendToQueue("edificios", Buffer.from(request));

    return { statusCode: 200, headers, body: 'OK'};
  } catch (error) {
    console.log(error);
    return { statusCode: 422, headers, body: JSON.stringify(error) };
  }
};