import React, { Component } from 'react'
import './App.css'
import './components/ArticlePanel.css'
import Logo from './logo.svg'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <div className='c-article'>
          <image src={Logo} />
          <div className='c-article__category'>
            <span className='c-article__category_logo'>≡</span>
          </div>
          <hr className='c-article__rule' />
          <span className='c-article__author'>
            Dave Smith
          </span>
          <span className='c-article__read_count'>
            231 <i>reads</i>
          </span>
          <h2 className='c-article__title'>
            Instagram is fuelling food waste
          </h2>
          <div className='c-article__read_more'>
            Read Article <span className='c-article__arrow'>→</span>
          </div>
        </div>
      </div>
    )
  }
}

export default App
