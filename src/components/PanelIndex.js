import React, { Component } from 'react'
import ArticlePanel from './ArticlePanel'
import './PanelIndex.css'

class PanelIndex extends Component {
  constructor (props) {
    super(props)
    this.state = { panelClass: 'article-panel' }
    this.loadPage = this.loadPage.bind(this)
  }

  loadPage () {
    setTimeout(() => { this.setState({panelClass: 'article-panel flipped'}) }, 200)
    setTimeout(() => { this.setState({panelClass: 'article-panel flipped expand'}) }, 1000)
  }

  render () {
    return (
      <section className='container'>
        <div onClick={this.loadPage} className={this.state.panelClass}>
          <ArticlePanel />
        </div>
      </section>
    )
  }
}

export default PanelIndex
