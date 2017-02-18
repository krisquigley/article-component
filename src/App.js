import React, { Component } from 'react'
import './App.css'
import './components/ArticlePanel.css'
import Logo from './logo.svg'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Logo />
        <div className='c-article'>
          <p>This is a sentence</p>
          <div className='c-article__read_more'>
            Read Article <span className='c-article__arrow'>→</span>
          </div>
        </div>
      </div>
    )
  }
}

export default App
