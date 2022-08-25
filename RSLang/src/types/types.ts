export type WordsDataT = WordDataT[];

export type WordDataT = {
  id: string,
  group: number,
  page: number,
  word: string,
  image: string,
  audio: string,
  audioMeaning: string,
  audioExample: string,
  textMeaning: string,
  textExample: string,
  transcription: string,
  wordTranslate: string,
  textMeaningTranslate: string,
  textExampleTranslate: string,
};

export type RsLangHandbookDataT = {
  group: number,
  page: number,
  currPage: number,
  activeWordCardIndex: number
};
