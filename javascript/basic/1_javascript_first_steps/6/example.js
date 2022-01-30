import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const books = [
  {
    id: 1,
    author: 'Amelia Hepworth',
    title: 'I Love You to the Moon and Back',
    img: 'https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL906_SR906,600_.jpg',
  },

  {
    id: 2,
    author: 'Valerie Bertinelli',
    title: 'Enough Already: Learning to Love the Way I Am Today',
    img: 'https://images-na.ssl-images-amazon.com/images/I/81oUqf2aiiS._AC_UL906_SR906,600_.jpg',
  },

  {
    id: 3,
    author: 'Amelia Hepworth',
    title: 'I Love You to the Moon and Back',
    img: 'https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL906_SR906,600_.jpg',
  },
];

function BookList() {
  return (
    <section className='booklist'>
      {books.map((book, index) => {
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}

const Book = ({ author, title, img }) => {
  //   const { author, title, img } = props;

  return (
    <article className='book'>
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById('root'));
