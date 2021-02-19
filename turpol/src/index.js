import React from 'react'
import ReactDOM from 'react-dom'

// CSS
import './index.css'
function BookList() {
  return (
    <section className='booklist'>
      <Book />
    </section>
  )
}
const author = 'Amelia Hepworth'
const Book = () => {
  const tittle = 'I Love You to the Moon and Back'
  return (
    <article className='book'>
      <img src='img/b3_cracow.jpg' alt='b3_cracow.jpg' />
      <h1>{tittle}</h1>
      <h4>{author.toUpperCase()}</h4>
      {/*<p>{let x=6}</p>*/}
      <p>{6 + 6}</p>
    </article>
  )
}

ReactDOM.render(<BookList />, document.getElementById('root'))
