import React, { createContext, useState } from "react";
import { v1 as uuid } from "uuid";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { title: "When The Sun Goes Down", author: "Patrick Mahomes", id: 1 },
    { title: "The River Between", author: "Margret Ogola", id: 2 },
    { title: "Mayai Waziri", author: "Travis Kelce", id: 3 },
    { title: "Over The Horizon", author: "Lamar Jackson", id: 4 },
  ]);
  const addBook = (title, author) => {
    setBooks([...books, { title: title, author: author, id: uuid() }]);
  };
  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };
  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
