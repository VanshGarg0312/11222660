export const logEvent = (message, data = {}) => {
  const log = {
    timestamp: new Date().toISOString(),
    message,
    data,
  };
  console.table(log);
};