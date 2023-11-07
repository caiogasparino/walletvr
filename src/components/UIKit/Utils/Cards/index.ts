export const checkCreditCardType = (cardNumber: string) => {
  // Regular expressions to check if the card number is a "Black" card
  const blackCardRegex = /^(4258|4026|417500|4508|4844|4913|4917)\d{12}$/; // 12 digits after the prefix
  // Regular expression to check if the card number is a "Normal" card
  const normalCardRegex = /^(\d{16}|\d{4}-\d{4}-\d{4}-\d{4})$/;

  if (blackCardRegex.test(cardNumber.replace(/\D/g, ''))) {
    return 'Black Card';
  } else if (normalCardRegex.test(cardNumber.replace(/\D/g, ''))) {
    return 'Creen Card'; // Changed to "Normal Card"
  } else {
    return 'Invalid Card'; // Changed to "Invalid Card" to indicate an unknown card type
  }
};

export const isCreditCardValid = (value: string) => {
  const cleanValue = value.replace(/[^0-9]/g, '');
  return cleanValue.length === 16;
};

export const isCardholderNameValid = (value: string | any[]) => {
  return value.length >= 2;
};

export const isExpiryDateValid = (value: string) => {
  return /^[0-9]{2}\/[0-9]{2}$/.test(value);
};

export const isSecurityCodeValid = (value: string) => {
  return /^[0-9]{3,4}$/.test(value);
};

export const creditCardMask = (cardNumber: string) =>
  '•••• •••• •••• ' + (cardNumber ? cardNumber.slice(-4) : '');
