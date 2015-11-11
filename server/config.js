/* eslint-disable no-process-env */

export const NODE_ENV = process.env.NODE_ENV || 'development';
export const isDevelopment = () => NODE_ENV === 'development';

export const PORT = process.env.PORT || 3000;
