import validator from "validator";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const {
    firstName,
    lastName,
    email,
    country,
    postalCode,
    phoneNumber,
    creditCardNumber,
    securityCode,
    expirationDate,
  } = body;

  const errors: string[] = [];

  if (!firstName.length) {
    errors.push("firstName");
  }
  if (!lastName.length) {
    errors.push("lastName");
  }
  if (!email.length || !validator.isEmail(email)) {
    errors.push("email");
  }
  if (!country.length || !["Poland", "United States"].includes(country)) {
    errors.push("country");
  }
  if (!postalCode.length || !validator.matches(postalCode, "[0-9]{5,5}")) {
    errors.push("postalCode");
  }
  if (!phoneNumber.length) {
    errors.push("phoneNumber");
  }
  if (
    !creditCardNumber.length ||
    !validator.matches(creditCardNumber, "([0-9-]+){19}")
  ) {
    errors.push("creditCardNumber");
  }
  if (!securityCode.length || !validator.matches(securityCode, "[0-9]{3}")) {
    errors.push("securityCode");
  }
  if (
    !expirationDate.length ||
    !validator.matches(expirationDate, "^(0[1-9]|1[0-2])/?([0-9]{2})$")
  ) {
    errors.push("expirationDate");
  }

  if (!!errors.length) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Bad Request',
      message: 'There are errors in the form. Please check fields marked with red border.',
      data: errors,
    })
  }

  return { ...body };
});
