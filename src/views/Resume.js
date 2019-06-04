import React from 'react';
import markdown from '../data/resume.md';
import ReactMarkdown from 'react-markdown';
import marked from "marked";


export default class Resume extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            markdown: null
        }
    }
    
    componentDidMount() {
        const readmePath = require("../data/resume.md");
      
        fetch(readmePath)
          .then(response => {
            return response.text()
          })
          .then(text => {
            this.setState({
              markdown: marked(text)
            })
          })
      }
      
      render () {
          const markdown = this.state.markdown;
          return (
            <div className="resume">
                <header>
                    <div className="title">
                        <h2>My Background</h2>
                    </div>
                </header>
                <ReactMarkdown source={markdown} escapeHtml={false}/>
            </div>
          )
      }

}
