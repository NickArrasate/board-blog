import DS from 'ember-data';

export default DS.Model.extend({
  category: DS.attr(),
  title: DS.attr(),
  author: DS.attr(),
  copy: DS.attr(),
  image: DS.attr(),
  comments: DS.hasMany('comment', {async: true})
});
