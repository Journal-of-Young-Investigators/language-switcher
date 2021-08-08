/**
 * For this project, create a Typescript React app that takes a prop `jyiArticle`, and
 * renders a component `language-switcher`, which enables a user to switch between the content
 * of the `jyiArticle` by language.
 */

/** 
 * A JYI article has:
 * - id, some unique identifier string
 * - content, an array of jyiArticleContent (basically all translations of the text)
 */
interface jyiArticle {
    id: string;
    content: jyiArticleContent[];
};

/**
 * jyiArticleContent consists of:
 * - langCode, ISO 639 code that identifies the language the content is in.
 * - text, a string of text in the language specified by the langCode.
 */
interface jyiArticleContent {
    // ISO 639 code to identify language; 'en' for English, 'es' for Spanish, etc.
    // See list here: https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
    // You don't have to store display name of language ('English' for 'en' for example), get it using this: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames/DisplayNames
    langCode: string;
    // Text of the article in the language specified.
    // Don't worry about the format of the text - just render it as it is given.
    text: string;
};


