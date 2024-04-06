export const convertToUSD = (price) => {
    const conversionRate = 0.01;
    return (price * conversionRate).toFixed(2);
  };