import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import './ArticlePanel.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {flash: null, flip: null}
    this.handleAdd = this.handleAdd.bind(this)
    this.handleNewPage = this.handleNewPage.bind(this)
  }

  handleAdd() {
    const newItems = <div className='progress-bar' />
    setTimeout(() => {this.handleNewPage()}, 500)
    this.setState({flash: newItems})
  }

  handleNewPage() {
    const Article = ''
    this.setState({articlePanel: Article})
  }

  render () {
    const flash = this.state.flash
    const articlePanel = this.state.articlePanel

    return (
      <div>
        <ReactCSSTransitionGroup transitionName='flip'>
          {articlePanel}
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
            <span onClick={this.handleAdd}>
              <div className='c-article__read_more'>
                <ReactCSSTransitionGroup
                  transitionName='flash'
                  transitionEnterTimeout={180}
                  transitionLeave={false}>
                  {flash}
                </ReactCSSTransitionGroup>
                Read Article <span className='c-article__arrow'>→</span>
              </div>
            </span>
          </div>
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}

export default App
