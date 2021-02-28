import AsyncStorage from "@react-native-community/async-storage";

export const save = async (text, createdAt) => {
  const key = `${createdAt}`;
  const value = JSON.stringify({
    text,
    createdAt,
  });

  await AsyncStorage.setItem(key, value);
  console.log(value);
};

export const loadAll = async () => {
  const keys = await AsyncStorage.getAllKeys();
  keys.sort();
  const entryList = await AsyncStorage.multiGet(keys);
  return entryList.map((entry) => JSON.parse(entry[1]));
};
