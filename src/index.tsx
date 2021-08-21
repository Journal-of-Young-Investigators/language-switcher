import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { LanguageSwitcher } from './components/lang-switcher';
import reportWebVitals from './reportWebVitals';

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
};

let testjyiArticleContent: jyiArticleContent[] = [
  {langCode: 'en', title: 'Nanoparticles: the Future of Drug Delivery', date: 'January 1, 2020', authors: ['Syed Haider'], 
    body: 'Drug development is one of the largest industries in the world. A significant amount of resources and time is invested into to produce drugs for clinical use. Equally important is the process of drug delivery and targeting by which the synthesized compounds are delivered to tissues in the body. As reported by Transparency Market Research in 2018, the drug delivery market is rapidly rising and is expected to be worth US $900 billion by 2025.'}, 
  {langCode: 'es', title: 'Nanopartículas: el futuro de la administración de fármacos', date: '1 de enero, 2020', authors: ['Syed Haider'], translators: ['Carina Brizuela'], 
    body: 'El desarrollo de medicamentos es una de las mayores industrias del mundo. Se invierte una gran cantidad de recursos y tiempo en la producción de fármacos para su uso clínico. Igual de importante es la administración dirigida de fármacos, proceso mediante el cual los compuestos sintetizados llegan a los tejidos del cuerpo. Como informó Transparency Market Research en 2018, el mercado de la administración de medicamentos está aumentando rápidamente y se espera que tenga un valor de 900 mil millones de dólares para el 2025.'},
  {langCode: 'zh', title: '这是中文汉字。', date: 'date in chinese', authors: ['Syed Haider', 'Test Author 2'], body: 'chinese body text'},
  {langCode: 'fr', title: 'Baguette', date: 'date in french', authors: ['Syed Haider'], body: 'french body'}
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
