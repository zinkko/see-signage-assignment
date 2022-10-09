const data: Record<string, string[]> = {
  test: [
    "https://imgs.xkcd.com/comics/easy_or_hard.png",
    "https://imgs.xkcd.com/comics/archimedes_principle.png",
    "https://imgs.xkcd.com/comics/movie_ages.png",
  ],
};

export const getAll = () => {
  return data;
};

export const getList = (name: string): string[] => {
  return data[name] ?? [];
};

export const addList = (name: string, items: string[]) => {
  data[name] = items;
};
