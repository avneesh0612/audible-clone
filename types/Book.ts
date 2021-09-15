interface book {
  id: string;
  volumeInfo: {
    imageLinks: {
      thumbnail: string;
    };
    title: string;
  };
}

export type { book };
