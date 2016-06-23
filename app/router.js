import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('quote', function() {
    this.route('edit',{
      path: ':quote_id'
    });
    this.route('new');
  });
});

export default Router;
