import Article from 'root/app/api/article';

export default [
  {
    method: 'GET',
    path: '/api/articles/{id}',
    handler: Article.show
  }
];
