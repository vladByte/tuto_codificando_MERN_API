import express 	from 'express';
import favicon 	from 'serve-favicon';
import cors		from 'cors';
import dotenv 	from 'dotenv';
// import {cnx} 	from '/src/database.js';
// import {buscador} from 'problema.js';

const port = 3001;

dotenv.config();
const app = express();
app.use(favicon('public/favicon.ico'));
app.use(cors());

app.get('/',(req, res) => {
	let usuario = process.env.usuario;
	res.send(`Todo esta funcionando correctamente bienvenido <strong>${usuario} </strong>`);
});

app.get('/usuarios', (req, res) => {
	res.send(`Listado de usuarios`);
});

app.listen(port, (req, res) => {
	console.log(`Server Runnig on http://localhost:${port}`);
});