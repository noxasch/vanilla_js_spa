'use strict';

import DashboardView from './view.dashboard.js';
import PostView from './view.posts.js';
import SettingsView from './view.settings.js';

const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};

const router = async () => {
  const routes = [
    { path: '/', view: DashboardView },
    { path: '/posts', view: PostView },
    { path: '/settings', view: SettingsView },
  ];

  const matchView = routes.map((route) => {
    return {
      route: route,
      isMatch: location.pathname === route.path
    }
  });

  // js find = firstWhere in Dart
  let match = matchView.find((match) => match.isMatch);
  // !undefined === true

  // default to index if no match
  if (!match) match = { route: routes[0], isMatch: true };

  console.log(match);

  // instantiate view
  const view = new match.route.view();
  document.querySelector('#app').innerHTML = await view.getHtml();

  // console.log(match.route.view);
};

// when hit back button
window.addEventListener('popstate', router);

document.addEventListener('DOMContentLoaded', () => {

  router();

  document.body.addEventListener('click', (e) => {
    if (e.target.matches('[data-link]')) {
      e.preventDefault();
      console.log(e);
      navigateTo(e.target.href);
    }
  })
});

