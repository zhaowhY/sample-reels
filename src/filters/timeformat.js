/**
 * @param {number}  timestamp
 * @param {string}  fmt eg:YYYY-MM-DD HH:mm:ss
 * @return {string}
 */
export default (timestamp, fmt) => {
  if (!timestamp || !fmt) return fmt;
  const date = new Date(timestamp);
  const [, YYYY, MM, DD, HH, mm, ss] = date.toISOString().match(/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})/);
  return fmt.replace('YYYY', YYYY)
    .replace('YY', YYYY.slice(-2))
    .replace('MM', MM)
    .replace('DD', DD)
    .replace('HH', HH)
    .replace('mm', mm)
    .replace('ss', ss);
};
