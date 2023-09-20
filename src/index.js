import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import { queryAllByDisplayValue } from "@testing-library/react";
// import App from './App';
// import reportWebVitals from './reportWebVitals';
import bookList from './books'
const root = ReactDOM.createRoot(document.getElementById("root"));


const Books = () => {
  const getbook = (x)=>{
    const book = bookList.find((book)=>(book.id === x));
    console.log(book);
  }

  return (
    <section className="books">
      {/* <EventExamples/> */}
      {bookList.map((book) => {
        return (
          <Book {...book} key={book.id} getbook={getbook} />
        );
      })}
    </section>
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



const Book = (props) => {
  const { img, title, Author, getbook, id} = props;
  // console.log(props);
  // const display=()=>{
  //   console.log(title);
  // }
  
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{Author.toUpperCase()}</h4>
      <button onClick={()=> getbook(id)}>Display title</button>
      
    </article>
  );
};

root.render(<Books></Books>);
