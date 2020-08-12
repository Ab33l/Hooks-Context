import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

// class Booklist extends Component {
//   static contextType = ThemeContext;
//   render() {
//     const { isLightTheme, light, dark } = this.context;
//     const theme = isLightTheme ? light : dark;
//     return (
//       <div
//         className="book-list"
//         style={{ background: theme.bg, color: theme.syntax }}
//       >
//         <ul>
//           <li style={{ background: theme.ui }}>Aubameyang</li>
//           <li style={{ background: theme.ui }}>Luiz</li>
//           <li style={{ background: theme.ui }}>Tierney</li>
//         </ul>
//       </div>
//     );
//   }
// }

const BookList = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <div
      className="book-list"
      style={{ background: theme.bg, color: theme.syntax }}
    >
      <ul>
        <li style={{ background: theme.ui }}>Aubameyang</li>
        <li style={{ background: theme.ui }}>Luiz</li>
        <li style={{ background: theme.ui }}>Tierney</li>
      </ul>
    </div>
  );
};

export default BookList;
