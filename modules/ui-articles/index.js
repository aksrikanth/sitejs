import React from 'react';
import Transmit from 'react-transmit';
import ArticleSnippet from 'modules/ui-article_snippet';

import posts from 'root/articles/posts.json';

class Articles extends React.Component {
  render () {
    let articles = JSON.parse(JSON.stringify(this.props.articles));
    articles.sort((a, b) => {
      if (a.time < b.time) {
        return 1;
      } else if (a.time > b.time) {
        return -1;
      } else {
        return 0;
      }
    });
    return (
      <div>
        {articles.map(article =>
          <ArticleSnippet article={article} />
        )}
      </div>
    );
  }
}

export default Transmit.createContainer(Articles, {
  queries: {
    articles(queryParams) {
      return new Promise((resolve, reject) => {
        const articles = Object.keys(posts).map(key => {
          const post = posts[key];
          const article = (({id, file, title, snippet}) =>
            ({id, file, title, snippet})
          )(post);
          article.time = Date.parse(post.time);
          article.timeString = post.time;
          return article;
        });
        resolve(articles);
      });
    }
  }
});
