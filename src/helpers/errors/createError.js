import { statusCode } from "./statusCode";

export const createError = (status, message = statusCode[status]) => {
  const error = new Error(message);
  error.status = status;
  return error;
};
