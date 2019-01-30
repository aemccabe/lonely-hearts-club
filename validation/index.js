export const validate = values => {
  const errors = {};

  if (!values.name) {
    errors.name = "We need a name";
  } else if (values.name.length < 4) {
    errors.name = "Sorry, too short needs be at least 4 characters long";
  } else if (values.name.length > 16) {
    errors.name = "Sorry, that's too long";
  }

  if (!values.likes) {
    errors.likes = "We need to know about your likes";
  }

  if (!values.dislikes) {
    errors.dislikes = "We need to know about your dislikes";
  }

  if (!values.dreamdate) {
    errors.dreamdate = "C'mon, what's your dream date like?";
  }

  return errors;
};
