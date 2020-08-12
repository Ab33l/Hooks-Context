import React, { createContext, useState } from "react";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { title: "When The Sun Goes Down", id: 1 },
    { title: "The River Between", id: 2 },
    { title: "Mayai Waziri", id: 3 },
    { title: "Over The Horizon", id: 4 },
  ]);
  return (
    <BookContext.Provider value={{ books }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
