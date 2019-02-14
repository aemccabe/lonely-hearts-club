export const validate = values => {
  const errors = {};

  if (!values.name) {
    errors.name = "We need a name";
  } else if (values.name.length < 4) {
    errors.name = "Sorry, too short needs be at least 4 characters long";
  } else if (values.name.length > 16) {
    errors.name = "Sorry, that's too long";
  }

  if (!values.anthem) {
    errors.anthem = "What's your anthem";
  }

  if (!values.crush) {
    errors.crush = "Who's your celebrity crush?";
  }

  if (!values.dreamdate) {
    errors.dreamdate = "C'mon, what's your dream date?";
  }

  return errors;
};
