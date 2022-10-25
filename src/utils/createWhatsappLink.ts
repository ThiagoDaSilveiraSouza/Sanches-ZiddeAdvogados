export const createWhatsappLink = (text: string, phone: number | string) => {
  return `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURI(text)}`;
};
