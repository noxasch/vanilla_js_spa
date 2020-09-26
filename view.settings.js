import AbstractView from './view.abstract.js';

class SettingsView extends AbstractView {
  constructor() {
    super();
    this.setTitle('Settings');
  }

  async getHtml() {
    return /*html*/`
      <h1>Settings</h1>
      <p>Profile</p>
      <p>Privacy</p>
    `;
  }
}


export default SettingsView;