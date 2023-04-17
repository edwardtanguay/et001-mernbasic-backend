export function sanitizeName(req, res, next) {
	console.log('sanitizing name');
	const { firstName, lastName } = req.body.employee;

	req.body.employee.firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
	req.body.employee.lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);

	next();
}
