import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import { queryAllByDisplayValue } from "@testing-library/react";
// import App from './App';
// import reportWebVitals from './reportWebVitals';
import bookList from './books'
import Book from './book'
const root = ReactDOM.createRoot(document.getElementById("root"));


const Books = () => {
  // const getbook = (x)=>{
  //   const book = bookList.find((book)=>(book.id === x));
  //   console.log(book);
  // }

  return (
      <>
      <h1>Amazon top selling books</h1>
    <section className="books">
      {/* <EventExamples/> */}
      {bookList.map((book, index) => {
        return (
          <Book {...book} 
          key={book.id} 
          // getbook={getbook} 
          index={index}/>
          );
        })}
    </section>
        </>
  );
};

// const EventExamples=()=>{
//   const handleButtonClick = (e) => {
//     // e.preventDefault();
//     // console.log(e);
//     console.log("handle the button click");
//   };
//   // const handleInputForm=(e) =>{
//   //   console.log(e.target.name);
//   //   console.log(e.target.value);
//   //   console.log("handle Input form");
//   //   // console.log(e.target);
//   // }
//   const submissionMail=(e)=>{
//     e.preventDefault();
//     // console.log(e);
//     console.log("Mail has been submitted");
//   }
//   return (
//     <section>
//       <form >
//         <h1>Typical File</h1>
//         <input
//           type="text"
//           name="example"
//           style={{ margin: "1rem 0" }}
//           // onChange={handleInputForm}
//           onChange={(e)=> console.log(e.target.value)}
//         />
//         <button type="submit" onClick={submissionMail}>
//           Submit
//         </button>
//       </form>
//       <div>
//         <button  onClick={handleButtonClick} type="submit">
//           click me
//         </button>
//       </div>
//     </section>
//   );
// }




root.render(<Books></Books>);
