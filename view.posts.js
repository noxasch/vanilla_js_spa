import AbstractView from './view.abstract.js';

class PostsView extends AbstractView {
  constructor() {
    super();
    this.setTitle('Posts');
  }

  async getHtml() {
    return /*html*/`
      <h1>Posts</h1>
      <p>Post 1</p>
      <p>Post 2</p>
      <p>Post 3</p>
    `;
  }
}


export default PostsView;