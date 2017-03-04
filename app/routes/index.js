import Ember from 'ember';

const { inject, Route } = Ember;

export default Route.extend({
  store: inject.service(),

  model() {
    return this.get('store').findAll('post');
  }
});
