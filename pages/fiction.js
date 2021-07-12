import Header from "../components/Header";

function fiction({ books }) {
  console.log(books);

  return (
    <div className="w-screen">
      <Header />
      <div className="flex space-x-5 mt-16 w-4/6 overflow-scroll">
        {books.items.map((book) => (
          <div key={book.id} className="bg-gray-100 shadow-xl">
            {/*          <h1>{book.volumeInfo.title}</h1>
          <h1>{book.volumeInfo.authors}</h1> */}
            <div>
              <img
                className="min-w-[100px] h-40 object-contain"
                src={book.volumeInfo.imageLinks?.thumbnail}
                alt={book.volumeInfo.title}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default fiction;

export const getServerSideProps = async () => {
  const books = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=fiction&maxResults=24&printType=books&key=${process.env.BOOK_API_KEY}`
  ).then((res) => res.json());

  return {
    props: {
      books,
    },
  };
};
