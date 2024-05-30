const successResponse = (data: any, message?: string) => {
  return {
    status: 'success',
    data,
    message,
  };
};
const errorResponse = (data: any, message?: string) => {
  return {
    status: 'error',
    data,
    message,
  };
};
export { successResponse, errorResponse };
