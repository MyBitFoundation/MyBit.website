export const shorten = (text: string) => {
  return `${text.substr(0, 5)}...${text.substr(text.length - 5, text.length)}`;
};
