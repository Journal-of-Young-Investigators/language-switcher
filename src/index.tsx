import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LanguageSwitcher from './App';
import reportWebVitals from './reportWebVitals';

interface jyiArticleContent {
  // ISO 639 code to identify language; 'en' for English, 'es' for Spanish, etc.
  // You don't have to store display name of language ('English' for 'en' for example), get it using this: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames/DisplayNames
  langCode: keyof typeof Language;
  // Text of the article in the language specified.
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
};

let testjyiArticleContent: jyiArticleContent[] = [
  {langCode: 'en', text: 'This is an example of text in English'}, 
  {langCode: 'es', text: 'Este es un ejemplo de texto en español'},
  {langCode: 'zh', text: '这是中文汉字。'},
  {langCode: 'fr', text: 'Baguette'},
]

let testjyiArticle: jyiArticle = {
  id: '1',
  content: testjyiArticleContent
}

ReactDOM.render(
  <React.StrictMode>
    <LanguageSwitcher article={testjyiArticle}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
