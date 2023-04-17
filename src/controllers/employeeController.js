export const saveEmployee = (req, res) => {
	const employee = { ...req.body.employee };
	employee.id = Math.floor(Math.random() * 100);
	res.send({
		message: 'valid',
		employeeSaved: employee
	});
};
