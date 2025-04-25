
interface Surah {
  number: number;
  name: string;
  englishName: string;
  englishNameTranslation: string;
  numberOfAyahs: number;
  revelationType: string;
}

export const fetchSurahs = async (): Promise<Surah[]> => {
  const response = await fetch('https://quranapi.pages.dev/surah');
  if (!response.ok) {
    throw new Error('Failed to fetch surahs');
  }
  return response.json();
};

export const fetchSurah = async (number: number) => {
  const response = await fetch(`https://quranapi.pages.dev/surah/${number}`);
  if (!response.ok) {
    throw new Error('Failed to fetch surah');
  }
  return response.json();
};
