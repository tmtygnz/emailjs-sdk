export const validateParams = (userID?: string, serviceID?: string, templateID?: string) => {
  if (!userID) {
    throw 'The user ID is required. Visit https://dashboard.emailjs.com/admin/integration';
  }

  if (!serviceID) {
    throw 'The service ID is required. Visit https://dashboard.emailjs.com/admin';
  }

  if (!templateID) {
    throw 'The template ID is required. Visit https://dashboard.emailjs.com/admin/templates';
  }

  return true;
};
