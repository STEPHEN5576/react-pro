const Book = (props) => {
  const { img, title, Author, getbook, id , index} = props;
  // console.log(props);
  // const display=()=>{
  //   console.log(title);
  // }

  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{Author.toUpperCase()}</h4>
      <span className="number">{`# ${index+1}`}</span>
      {/* <button onClick={() => getbook(id)}>Display title</button> */}
    </article>
  );
};

export default Book;