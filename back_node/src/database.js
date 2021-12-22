import mysql from 'mysql';

const configMysql = {

	host: process.env.HOST,
	dbuser: process.env.DB_USER,
	dbname: process.env.DB_NAME,
	dbport: process.env.DB_PORT,
	dbpass: process.env.DB_PASS,

}

try{
	const cnx = mysql.createConnection(configMysql);
	console.log(`Conexión Exitosa`);
}catch(e){
	console.log(e);
}

module.exports (cnx);