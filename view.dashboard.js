import AbstractView from './view.abstract.js';

class DashboardView extends AbstractView {
  constructor() {
    super();
    this.setTitle('Dashboard');
  }

  async getHtml() {
    return /*html*/`
      <h1>Welcome back, John</h1>
      <p>Fugiat voluptate et nisi Lorem cillum anim sit do eisumod occecat irure</p>
      <p><a href="/posts" data-link>view recent posts</a></p>
    `;
  }
}


export default DashboardView;