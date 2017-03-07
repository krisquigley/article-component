import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import './ArticlePanel.css'

class ArticlePanel extends Component {
  constructor (props) {
    super(props)
    this.state = {flash: null}
    this.handleAdd = this.handleAdd.bind(this)
  }

  handleAdd () {
    const newItems = <div className='progress-bar' />
    this.setState({flash: newItems})
  }

  render () {
    const flash = this.state.flash

    return (
      <div>
        <div className='c-article' onClick={this.handleAdd}>
          <hr className='c-article__rule' />
          <div className='c-article__category'>
            <span className='c-article__category_logo'>≡</span>
          </div>
          <span className='c-article__author'>
            Dave Smith
          </span>
          <span className='c-article__read_count'>
            342 <i>reads</i>
          </span>
          <h2 className='c-article__title'>
            Instagram is fuelling food waste
          </h2>
          <div className='c-article__read_more'>
            <ReactCSSTransitionGroup
              transitionName='flash'
              transitionEnterTimeout={180}
              transitionLeave={false}>
              {flash}
            </ReactCSSTransitionGroup>
            Read Article <span className='c-article__arrow'>→</span>
          </div>
        </div>
        <div className='c-article-back' />
      </div>
    )
  }
}

export default ArticlePanel
