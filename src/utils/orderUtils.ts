export const calculateDelivery = (price: number): string => {
  return price >= 6000 ? "Бесплатно" : "500 ₽";
};

export const formatPrice = (price: number): string => {
  return `${price.toLocaleString()} ₽`;
};

export const validateOrderForm = (form: {
  name: string;
  phone: string;
  date: string;
  weight: string;
  filling: string;
}): boolean => {
  return Boolean(
    form.name && form.phone && form.date && form.weight && form.filling,
  );
};
