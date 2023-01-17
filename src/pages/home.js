import React, { Component } from 'react'
import "./home.css"
import Title from "./title"
import book1 from "./sem/cyberbook1.png"
import book2 from "./sem/cyberbook2.png"
export default class home extends Component {
  constructor(props){
    super(props)
    this.state = {book:[book1,book2],
                  current:0}
  }

  componentDidMount(){
    setInterval(()=>this.changeRight(),7000);
  }

  changeRight(){
    var index = this.state.current;
    index = index + 1
    if(index%2 == 0){
      index = 0
    }
    else{
      index = 1 
    }
    this.setState({current:index})
  }

  changeLeft(){
    var index = this.state.current;
    index = index - 1
    if(index == -1){
      index = this.state.book.length - 1
      console.log(index)
    }
    this.setState({current:index})
  }

  render() {
    return (
      <section className='intro'>
        <Title/>
        <div className='book-image-container'>
          <div>
            <button className='book-image-left-button caro-nav' onClick={()=>this.changeLeft()}>&lt;</button>
          </div>
          
          <img src={this.state.book[this.state.current]} className='book'/>
          <div>
            <button className='book-image-right-button caro-nav' onClick={()=>this.changeRight()}>&gt;</button>
          </div>
        </div>
      </section>
    )
  }
}
