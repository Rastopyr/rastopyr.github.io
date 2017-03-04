import Ember from 'ember';

const { Route, inject } = Ember;

export default Ember.Route.extend({
  store: inject.service(),

  model({ id }) {
    return this.get('store').findRecord('post', id);
  },
});
