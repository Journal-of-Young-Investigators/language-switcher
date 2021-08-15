import React from 'react';
import { isBreakOrContinueStatement } from 'typescript';
import './App.css';

interface jyiArticleContent {
  // ISO 639 code to identify language; 'en' for English, 'es' for Spanish, etc.
  // See list here: https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
  // You don't have to store display name of language ('English' for 'en' for example), get it using this: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames/DisplayNames
  langCode: string;
  // Text of the article in the language specified.
  // Don't worry about the format of the text - just render it as it is given.
  text: string;
};

interface jyiArticle {
  id: string;
  content: jyiArticleContent[];
};

type MyState = {
  articleText: string;
}

class App extends React.Component<jyiArticle, MyState> {

  state: MyState = {
    articleText: ''
  }

  componentDidMount() {
    for (let i = 0; i < this.props.content.length; i++) {
      if (this.props.content[i].langCode === 'en') {
        this.setState({
          articleText: this.props.content[i].text
        });
        break;
      }
    }
  }

  handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    for (let i = 0; i < this.props.content.length; i++) {
      if (this.props.content[i].langCode === event.currentTarget.lang) {
        this.setState({
          articleText: this.props.content[i].text
        });
        break;
      }
    }
    
    const langTabs = document.getElementsByClassName("lang-option");
    for (let i = 0; i < langTabs.length; i++) {
      if (langTabs[i].getAttribute("lang") === event.currentTarget.lang) {
        langTabs[i].setAttribute("lang-status", "on");
      }
      else {
        langTabs[i].setAttribute("lang-status", "off");
      }
    }
  }
  
  render() {
    return (
      <div>
        <div className="lang-options">
          <div className="lang-option" lang="en" lang-status="on" onClick={this.handleClick}>
            English
          </div>
          <div className="lang-option" lang="es" lang-status="off" onClick={this.handleClick}>
            Español
          </div>
        </div>
        <div className="body">
          {this.state.articleText}
        </div>
      </div>
    );
  }
}

export default App;