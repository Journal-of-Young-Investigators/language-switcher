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

function ParseText(text: string) {
  const h3Open = '<h3>';
  const h3Close = '</h3>';
  const pOpen = '<p>';
  const pClose = '</p>';
  
  let lines = text.split('\n');
  let output = '';
  output = h3Open + lines[0] + h3Close + '\n';

  for (let i = 1; i < lines.length; i++) {
    if (lines[i] == 'References:') break;
    output += pOpen + '\n' + lines[i] + '\n' + pClose + '\n';
  }
  return output;
}

type MyState = {
  articleText: string;
}

class App extends React.Component<jyiArticle, MyState> {

  state: MyState = {
    articleText: ''
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
  }
  
  render() {
    return (
      <div>
        <div className="lang-options">
          <div className="lang-option" lang="en" onClick={this.handleClick}>
            English
          </div>
          <div className="lang-option" lang="es" onClick={this.handleClick}>
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
