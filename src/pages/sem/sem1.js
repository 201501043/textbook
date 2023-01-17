import React, { Component } from 'react'
import book1 from "./cyberbook1.png"
// import tb from "./pdf/Cyber Security Text Book 1.pdf"
import "./body.css"
export default class sem1 extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      subjects:[
        {  
          'id': 'C Y B E R  S E C U R I T Y',   
          book:[
            {"book":require('./cyberbook1.png'),"link":require('./pdf/Cyber Security Text Book 1.pdf')},
            {"book":require('./cyberbook2.png'),"link":require('./pdf/Cyber Security Text Book 2.pdf')}
          ]
        },  
        {  
          'id':'Computer Networks',   
          book:[
            {"book":require("./network1.png"),"link":require('./pdf/Computer Networks Text Book 1.pdf')},
            {"book":require("./network2.png"),"link":require('./pdf/Computer Networks Text Book 2.pdf')}
          ]
        },
        {  
          'id': 'Fundamental of Machine Learning',   
          book:[
            {"book":require("./dl1.png"),"link":require('./pdf/Deep Learning Text Book 1.pdf')},
            {"book":require("./dl2.png"),"link":require('./pdf/Deep Learning Text Book 2.pdf')},
          ]
        },  
        {  
          'id':'Data Science Using R',   
          book:[
            {"book":require("./dsr1.png"),"link":require('./pdf/Data Science Text Book 1.pdf')},
            {"book":require("./dsr2.png"),"link":require('./pdf/Data Science Text Book 2.pdf')},
          ]
        },
        {  
          'id': 'Computional Statistics',   
          book:[
            {"book":book1,"link":'https://samuel-2552.github.io/timetable/Computational%20Statistics/Computational%20Statistics%20Text%20Book%201.pdf'},
            {"book":book1,"link":'./pdf/Cyber Security Text Book 1.pdf'},
            {"book":book1,"link":'./pdf/Cyber Security Text Book 1.pdf'}
          ]
        },  
        {  
          'id':'AI for Game Programming',   
          book:[
            {"book":book1,"link":'./pdf/Cyber Security Text Book 1.pdf'},
            {"book":book1,"link":'./pdf/Cyber Security Text Book 1.pdf'},
            {"book":book1,"link":'./pdf/Cyber Security Text Book 1.pdf'}
          ]
        }
      ]
    }
  }
  render() {
    return (
      <section className='body'>
        {
          this.state.subjects.map(
            (subjects) => (
              <div className='body-card-view'>
                <h1><pre>{subjects.id}</pre></h1>
                <div className='book-container'>{
                subjects.book.map(
                (book) => (
                    <a href={book.link} target="_blank" rel='noreferrer'><img src={book.book} className="books" alt={subjects.id}/></a>
                )
              )}
              </div>
              </div>
            )
          )
        }
      </section>
    )
  }
}
