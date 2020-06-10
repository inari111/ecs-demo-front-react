import React, { useState, useEffect } from 'react';
import { fetchBooks } from '../api/book';
import { Book }  from '../models/book';

// FCはReact Functional Component
// useState<Book[] | undifined> bookListの型がBook[]またはundifinedであることを示す
const Books: React.FC = () => {
  const [bookList, setBookList] = useState<Book[] | undefined>(undefined);

  const fetchBooksReq = async () => {
    try {
      const { data } = await fetchBooks();
      return data;
    } catch(err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const data = fetchBooksReq();
    data.then(books => {
      // 取得した情報をbookListにセット
      setBookList(books);
    });
  }, []);

  return (
    <>
    <h1>ブックマーク</h1>
      {
        bookList && bookList.map((book) => {
          return (
            <p key={book.id}>{book.name} / {book.author}</p>
          );
        })
      }
    </>
  );
};

export default Books;