export function validateFirstName(req, res, next) {
  console.log('validating name');
  const { firstName } = req.body.employee;

  if (firstName.length < 3) {
    const error = new Error(`first name is too short, must be 3 or more characters`)
    error.status = 400
    next(error)
  }

  next()
}