const data = [
  "https://imgs.xkcd.com/comics/easy_or_hard.png",
  "https://imgs.xkcd.com/comics/archimedes_principle.png",
  "https://imgs.xkcd.com/comics/movie_ages.png",
];

export const getData = () => {
  return data;
};

export const addItem = (item: string) => {
  data.push(item);
};
