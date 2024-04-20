export const genRandomId = () => Math.random().toString(36).substr(2, 6);
export const formatPrice = (price) => `$${price.toFixed(2)}`;
