import Image from "next/image";
import Header from "components/Header";
import requests from "utils/requests";
import Head from "next/head";

function index({ books, volume }) {
  console.log(books);
  return (
    <div className="w-[82vw] flex  flex-col  items-center overflow-x-hidden justify-center mx-auto dark:text-gray-100">
      <Head>
        <title>{requests[volume].title}</title>
      </Head>
      <Header />
      <div className="text-left w-4/6 mt-10">
        <h2 className="text-2xl font-semibold ">{requests[volume].title}</h2>
        <p className="text-gray-600">{books.items.length} items</p>
      </div>
      <div className="flex space-x-5 mt-16 w-4/6 overflow-scroll  hidescroll">
        {books.items.map(book => (
          <div key={book.id} className="bg-gray-100 shadow-xl">
            {/* <h1>{book.volumeInfo.title}</h1>
            <h1>{book.volumeInfo.authors}</h1> */}
            <div className="relative min-w-[100px] h-40">
              <Image
                layout="fill"
                objectFit="cover"
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

export default index;

export async function getServerSideProps(context) {
  const volume = context.query.volume;
  const URL = `https://www.googleapis.com/books/v1${
    requests[volume]?.url || requests.fetchTrending.url
  }`;

  const request = await fetch(URL).then(res => res.json());

  return {
    props: {
      books: request,
      volume,
    },
  };
}
