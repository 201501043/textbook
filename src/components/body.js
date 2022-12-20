import React, { Component } from 'react'
import "./body.css"
import book1 from "./cyberbook1.png"
import book2 from "./cyberbook2.png"
export default class body extends Component {
  render() {
    return (
      <section className='body'>
        <div className='body-heading'>
          <h1>S E M E S T E R - &#8548;</h1>
        </div>
        <div className='body-card-view'>
          <h1>CYBER SECURITY</h1>
          <div className='book-container'>
            <a href="./pdf/Cyber Security Text Book 1.pdf"><img src={book1} className="books"/></a>
            <a href=""><img src={book2} className="books"/></a>
          </div>
        </div>
      </section>
    )
  }
}
