import React from 'react';
import './App.css';

interface jyiArticleContent {
  // ISO 639 code to identify language; 'en' for English, 'es' for Spanish, etc.
  // See list here: https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
  // You don't have to store display name of language ('English' for 'en' for example), get it using this: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames/DisplayNames
  langCode: keyof typeof Language;
  // Text of the article in the language specified.
  // Don't worry about the format of the text - just render it as it is given.
  text: string;
};

interface jyiArticle {
  id: string;
  content: jyiArticleContent[];
};

enum Language {
  en='English',
  es='Español',
  fr='Français',
  zh='中國人'
}

type MyProps = {
  article: jyiArticle
}

type MyState = {
  article: jyiArticle,
  currentLang: string,
}

class LanguageSwitcher extends React.Component<MyProps, MyState> {

  state: MyState = {
    article: this.props.article,
    currentLang: 'en',
  };

  handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    this.setState({ currentLang: event.currentTarget.lang });
  };
  
  render() {
    return (
      <div>
        <div className="lang-options">
          {
            this.state.article.content.map( ( content: jyiArticleContent ) => {
              return (
              <div className="lang-option" lang={content.langCode} onClick={this.handleClick} current-lang={this.state.currentLang === content.langCode ? "true" : "false"}>
                {Language[content.langCode]}
              </div>
              )
            })
          }
        </div>
        <div className="article-text">
          {this.state.article.content.map( ( content: jyiArticleContent ) => {
            return (this.state.currentLang === content.langCode) ? content.text : "";
          })}
        </div>
      </div>
    );
  }
}

export default LanguageSwitcher;