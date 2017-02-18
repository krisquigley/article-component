import React, { Component } from 'react'
import './ArticlePanel.css'

class App extends Component {
  render () {
    return (
      <div>
        <div className='c-article'>
          <div className='c-article__category'>
            <span className='c-article__category_logo'>≡</span>
          </div>
          <hr className='c-article__rule' />
          <span className='c-article__author'>
            Dave Smith
          </span>
          <span className='c-article__read_count'>
            342 <i>reads</i>
          </span>
          <h2 className='c-article__title'>
            Instagram is fuelling food waste
          </h2>
          <a href='/'>
            <div className='c-article__read_more'>
              Read Article <span className='c-article__arrow'>→</span>
            </div>
          </a>
        </div>
      </div>
    )
  }
}

export default App
