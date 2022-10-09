import { redisClient } from "../index";

export const getAll = async () => {
  const keys = await redisClient.keys("*");
  const data: Record<string, string[]> = {};
  for (let key of keys) {
    const value = await redisClient.get(key);
    data[key] = JSON.parse(value as string);
  }
  console.log('get data:', data);
  return data;
};

export const getList = async (name: string): Promise<string[]> => {
  const data = await redisClient.get(name);
  if (!data) return [];

  return JSON.parse(data);
};

export const addList = async (name: string, items: string[]) => {
  await redisClient.set(name, JSON.stringify(items));
};

export const addItemToList = async (name: string, newItem: string) => {
  const data = await redisClient.get(name);
  const list = data ? JSON.parse(data) : [];
  await redisClient.set(name, JSON.stringify([...list, newItem]));
}