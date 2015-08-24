import React from 'react';
import Transmit from 'react-transmit';
import ReactMarkdown from 'react-markdown';

class Article extends React.Component {
  render () {
    const content = this.props.content;
    return (
      <ReactMarkdown source={content} />
    );
  }
}

export default Transmit.createContainer(Article, {
  queries: {
    content(queryParams) {
      return fetch(`/api/articles/${queryParams.articleId}`, {
        method: 'get'
      }).then(response => response.text());
    }
  }
});
