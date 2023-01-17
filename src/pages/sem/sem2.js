import React, { Component } from 'react'
import book1 from "./cyberbook1.png"
import "./body.css"
export default class sem1 extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      subjects:[
        {  
          'id': 'Cyber Security',   
          book:[
            {"book":book1,"link":'link1'},
            {"book":book1,"link":'link2'},
            {"book":book1,"link":'link3'},
            {"book":book1,"link":'link3'}
          ]
        },  
        {  
          'id':'Computer Networks',   
          book:[
            {"book":book1,"link":'link1'},
            {"book":book1,"link":'link2'}
          ]
        },
        {  
          'id': 'Fundamental of Machine Learning',   
          book:[
            {"book":book1,"link":'link1'},
            {"book":book1,"link":'link2'},
            {"book":book1,"link":'link3'}
          ]
        },  
        {  
          'id':'Data Science Using R',   
          book:[
            {"book":book1,"link":'link1'},
            {"book":book1,"link":'link2'},
            {"book":book1,"link":'link3'}
          ]
        },
        {  
          'id': 'Computional Statistics',   
          book:[
            {"book":book1,"link":'link1'},
            {"book":book1,"link":'link2'},
            {"book":book1,"link":'link3'}
          ]
        },  
        {  
          'id':'AI for Game Programming',   
          book:[
            {"book":book1,"link":'link1'},
            {"book":book1,"link":'link2'},
            {"book":book1,"link":'link3'}
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
                <h1>{subjects.id}</h1>
                <div className='book-container'>{
                subjects.book.map(
                (book) => (
                    <a href="#book"><img src={book.book} className="books" alt={subjects.id}/></a>
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
