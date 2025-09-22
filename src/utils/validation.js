export const validateUserForm = (userData) => {
  const errors = {};

  if (!userData.name) {
    errors.name = 'First name is required';
  }

  if (!userData.username) {
    errors.username = 'Last name is required';
  }

  if (!userData.email) {
    errors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(userData.email)) {
    errors.email = 'Email is invalid';
  }

  if (!userData.company?.name) {
    errors.department = 'Department is required';
  }

  return errors;
};