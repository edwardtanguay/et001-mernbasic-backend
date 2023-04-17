import fs from 'fs';
import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const port = 3322;

app.get('/', (req, res) => {
	res.send('mernbasic API')
});

app.post('/employee', (req, res) => {
	const employee = req.body;
	console.log(employee);
	res.send('ok');
});

app.get('/employees', (req, res) => {
	const rawEmployees = fs.readFileSync('./src/data/employees.json','utf8');
	const employees = JSON.parse(rawEmployees);
	res.send(employees)
});

app.listen(port, () => {
	console.log(`listening at http://localhost:${port}`);
});