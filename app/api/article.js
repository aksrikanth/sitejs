import fs from 'fs';
import Path from 'path';

import posts from 'root/articles/posts.json';

export default class Article {
  static show(request, reply) {
    const filename = Path.resolve(__ARTICLE_ROOT__, posts[request.params.id].file);
    const contents = fs.readFileSync(filename, {encoding: 'utf-8'});
    return reply(contents).type('text/plain');
  }
}
