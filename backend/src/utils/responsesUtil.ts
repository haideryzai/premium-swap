
const successResponse = (data: any, message?: string, code?: number) => {
  return {
    error: false,
    data,
    message,
    code: code,
  };
};
const errorResponse = (data: any, message?: string, code?: number) => {
  return {
    error: true,
    data,
    message,
    code: code,
  };
};
export { successResponse, errorResponse };
