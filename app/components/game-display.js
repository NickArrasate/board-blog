import Ember from 'ember';

export default Ember.Component.extend({
  model(){
    return this.store.findRecord('post')
  }
});