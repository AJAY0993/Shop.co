export const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
export const genRandomId = () => Math.random().toString(36).substr(2, 6);
export const formatPrice = (price) => `$${price.toFixed(2)}`;
export const formatDate = (date) =>
  `${month[new Date(date).getMonth()]} ${new Date(date).getFullYear()}`;
