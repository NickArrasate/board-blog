import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    savePost(){
      var params = {
        category: this.get('category') ? this.get('category') : "",
        title: this.get('title') ? this.get('title') : "",
        copy: this.get('copy') ? this.get('copy') : "",
        author: this.get('author') ? this.get('author') : "",
        image: this.get('image') ? this.get('image') : ""
      };
      this.sendAction("savePost", params);
    }
  }
});
