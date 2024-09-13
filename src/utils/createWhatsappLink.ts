export const createWhatsappLink = (text: string, phone: number | string) => {
  return `https://api.whatsapp.com/send?phone=+55${phone}&text=${encodeURI(text)}`;
};
