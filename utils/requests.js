export default {
  fetchFiction: {
    title: "Fiction",
    url: `/volumes?q=fiction&key=${process.env.BOOK_API_KEY}`,
  },
  fetchScifi: {
    title: "Sci-Fi",
    url: `/volumes?q=sci-fi&key=${process.env.BOOK_API_KEY}`,
  },
  fetchMysteries: {
    title: "Mysteries",
    url: `/volumes?q=mysteries&key=${process.env.BOOK_API_KEY}`,
  },
  fetchRomance: {
    title: "Romance",
    url: `/volumes?q=romaces&key=${process.env.BOOK_API_KEY}`,
  },
  fetchTeen: {
    title: "Teen and Young Adult",
    url: `/volumes?q=teen&key=${process.env.BOOK_API_KEY}`,
  },
  fetchReligion: {
    title: "Religion and Spirituality",
    url: `/volumes?q=religionandspirituality&key=${process.env.BOOK_API_KEY}`,
  },
  fetchSelfDev: {
    title: "Self Development",
    url: `/volumes?q=selfdevelopment&key=${process.env.BOOK_API_KEY}`,
  },
  fetchBiographies: {
    title: "Biographies and Memoirs",
    url: `/volumes?q=biographies&key=${process.env.BOOK_API_KEY}`,
  },
  fetchChildren: {
    title: "Children Audiobooks",
    url: `/volumes?q=children&key=${process.env.BOOK_API_KEY}`,
  },
  fetchHistory: {
    title: "History",
    url: `/volumes?q=history&key=${process.env.BOOK_API_KEY}`,
  },
  fetchBuisiness: {
    title: "Business and Money",
    url: `/volumes?q=business&key=${process.env.BOOK_API_KEY}`,
  },
};
