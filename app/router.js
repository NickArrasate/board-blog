import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('contact');
  this.route('admin');
  this.route('game-post', {path: 'game-post/:post_id'});
});

export default Router;
