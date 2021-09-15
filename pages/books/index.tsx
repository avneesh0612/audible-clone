import Image from "next/image";
import Header from "../../components/Header";
import requests from "../../utils/requests";
import Head from "next/head";
import { book } from "../../types/Book";

interface BookProps {
  books: any;
  volume: string;
}

const index: React.FC<BookProps> = ({ books, volume }) => {
  return (
    <div className="w-[82vw] flex  flex-col  items-center overflow-x-hidden justify-center mx-auto dark:text-gray-100">
      <Head>
        <title>{requests[volume].title}</title>
      </Head>
      <Header />
      <div className="w-4/6 mt-10 text-left">
        <h2 className="text-2xl font-semibold ">{requests[volume].title}</h2>
        <p className="text-gray-600">{books.items.length} items</p>
      </div>
      <div className="flex w-4/6 mt-16 space-x-5 overflow-scroll hidescroll">
        {books.items.map((book: book) => (
          <div key={book.id} className="bg-gray-100 shadow-xl">
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
};

export default index;

export async function getServerSideProps(context: any) {
  const volume = context.query.volume;
  const URL = `https://www.googleapis.com/books/v1${
    requests[volume]?.url || requests?.fetchTrending?.url
  }`;

  const request = await fetch(URL).then((res) => res.json());

  return {
    props: {
      books: request,
      volume,
    },
  };
}
