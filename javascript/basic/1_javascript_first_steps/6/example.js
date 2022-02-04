import React from 'react';

const books = [
  {
    id: 1,
    author: 'Amelia Hepworth',
    title: 'I Love You to the Moon and Back',
    img: 'https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL906,600_.jpg',
  },
  {
    id: 2,
    author: 'Valerie Bertinelli',
    title: 'Enough Already: Learning to Love the Way I Am Today',
    img: 'https://images-na.ssl-images-amazon.com/images/I/81oUqf2aiiS._AC_UL906_S,600_.jpg',
  },
];

const Book = ({ author, title, img }) => {
  return (
    <article>
      <img style={{ width: '200px' }} src={img} alt={title} />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

function App() {
  return (
    <section className='App'>
      {books.map((book, index) => {
        return <Book key={index} {...book} />;
      })}
    </section>
  );
}

export default App;
