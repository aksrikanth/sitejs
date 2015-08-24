import React from 'react';
import Article from 'modules/ui-article';

export default class ParamsProxy extends React.Component {
  render () {
    return <Article queryParams={{articleId: this.props.params.articleId}} />;
  }
}
