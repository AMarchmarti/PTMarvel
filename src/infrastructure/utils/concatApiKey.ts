export const concatApiKey = (path: string) => {
  return `${path}&apikey=${import.meta.env.VITE_API_KEY}`;
};
