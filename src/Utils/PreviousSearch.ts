import AsyncStorage from '@react-native-async-storage/async-storage';

export async function saveSearch(search: string) {
  const searches = await getSearches();
  if (searches.includes(search)) return;
  searches.push(search);
  if (searches.length > 4) searches.shift();
  await AsyncStorage.setItem('searches', JSON.stringify(searches));
}

export async function getSearches() {
  const searches = await AsyncStorage.getItem('searches');
  if (!searches) {
    await AsyncStorage.setItem('searches', JSON.stringify([]));
    return [];
  }
  return searches ? JSON.parse(searches) : [];
}
