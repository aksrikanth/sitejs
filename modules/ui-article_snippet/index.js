import React from 'react';
import {Link} from 'react-router'
import relativeTime from 'modules/relative_time';

export default class ArticleSnippet extends React.Component {
  render () {
    const now = Date.now();
    const article = this.props.article;
    return (
      <article className='article'>
        <header className='title'>
          <div className='right-time' title={article.timeString}>
            {relativeTime(article.time)}
          </div>
          <h3>{article.title}</h3>
        </header>
        <p className='snippet'>{article.snippet}</p>
        <Link to='article' params={{articleId: article.id}}>read full article &raquo;</Link>
      </article>
    );
  }
}
