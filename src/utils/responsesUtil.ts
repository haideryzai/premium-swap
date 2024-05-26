const successResponse = (data: any, message?: string) => {
  return {
    status: 'success',
    message,
    data,
  };
};
const errorResponse = (data: any, message?: string) => {
  return {
    status: 'error',
    message,
    data,
  };
};
export { successResponse, errorResponse };
