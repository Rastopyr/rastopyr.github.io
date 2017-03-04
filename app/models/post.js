import DS from 'ember-data';

const { attr, Model, hasMany } = DS;

export default DS.Model.extend({
  title: attr(),
  content: attr(),
  type: attr(),
  href: attr(),
  preview_title: attr(),
  image_src: attr(),
  timestamp: attr(),
});
