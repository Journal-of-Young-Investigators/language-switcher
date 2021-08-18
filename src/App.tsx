import React from 'react';
import './App.css';

interface jyiArticleContent {
  // ISO 639 code to identify language; 'en' for English, 'es' for Spanish, etc.
  // See list here: https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
  // You don't have to store display name of language ('English' for 'en' for example), get it using this: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames/DisplayNames
  langCode: keyof typeof Language;
  title: string;
  date: string;
  authors: string[];
  translators?: string[];
  body: string;
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

  formatAuthorsOrTranslators = (authors: string[]) => {
    let formatted: string = '';
    for (let i = 0; i < authors.length; i++) {
      formatted += authors;
      if (i < authors.length-1) formatted += ', ';
    }
    
    return formatted;
  }
  
  render() {
    return (
      <div>
        <div className="lang-options">
          {
            this.state.article.content.map( (content: jyiArticleContent) => {
              return (
              <div className="lang-option" lang={content.langCode} onClick={this.handleClick} current-lang={this.state.currentLang === content.langCode ? "true" : "false"}>
                {Language[content.langCode]}
              </div>
              )
            })
          }
        </div>
        <div className="article-content">
          {this.state.article.content.map( ( content: jyiArticleContent ) => {
            if (this.state.currentLang === content.langCode) {
              return (
                <>
                  <h2>{content.title}</h2>
                  <div className="date">{content.date}</div>
                  <h3>{this.formatAuthorsOrTranslators(content.authors)}</h3>
                  <h3>{content.translators != null ? this.formatAuthorsOrTranslators(content.translators): 'No translator'}</h3>
                  <p>{content.body}</p>
                </>
              );
            }
            else return "";
          })}
        </div>
      </div>
    );
  }
}

export default LanguageSwitcher;