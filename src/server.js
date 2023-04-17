import fs from 'fs';
import express from 'express';
import cors from 'cors';
import { saveEmployee } from './controllers/employeeController.js';
import { validateFirstName } from './middleware/employeeValidator.js';
import { sanitizeName } from './middleware/employeeSanitizer.js';

const app = express();
app.use(cors());
app.use(express.json());

const port = 3322;

app.get('/', (req, res) => {
	res.send('mernbasic API')
});

app.post('/employee', sanitizeName, validateFirstName, saveEmployee)

app.post('/employee', (req, res) => {
	console.log('employee route');
	const employee = req.body;
	res.send('ok');
});

app.get('/employees', (req, res) => {
	const rawEmployees = fs.readFileSync('./src/data/employees.json','utf8');
	const employees = JSON.parse(rawEmployees);
	res.send(employees)
});

app.use(function errorHandler(err, req, res, next) {
  console.error("handling error", err)
  res.status(err.status || 500)
  res.send({
    error: {
      message: err.message,
    },
  })
})

app.listen(port, () => {
	console.log(`listening at http://localhost:${port}`);
});