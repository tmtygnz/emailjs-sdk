import { store } from '../../store/store';
import { validateParams } from '../../utils/validateParams';
import { sendPost } from '../../api/sendPost';

import type { EmailJSResponseStatus } from '../../models/EmailJSResponseStatus';

/**
 * Send a template to the specific EmailJS service
 * @param {string} serviceID - the EmailJS service ID
 * @param {string} templateID - the EmailJS template ID
 * @param {object} templatePrams - the template params, what will be set to the EmailJS template
 * @param {string} userID - the EmailJS user ID
 * @returns {Promise<EmailJSResponseStatus>}
 */
export const send = (
  serviceID: string,
  templateID: string,
  templatePrams?: Record<string, unknown>,
  userID?: string,
): Promise<EmailJSResponseStatus> => {
  const uID = userID || store._userID;

  validateParams(uID, serviceID, templateID);

  const params = {
    lib_version: process.env.npm_package_version,
    user_id: uID,
    service_id: serviceID,
    template_id: templateID,
    template_params: templatePrams,
  };

  return sendPost('/api/v1.0/email/send', JSON.stringify(params), {
    'Content-type': 'application/json',
  });
};
