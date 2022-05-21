export const formatCurrency = (digits: number, isSymbol?: boolean): string => {
  const currency = digits.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  if (isSymbol) {
    return currency + ' ฿';
  }
  return currency;
};
