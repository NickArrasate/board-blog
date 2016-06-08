import Ember from 'ember';

export default Ember.Component.extend({
  updatePostForm: false,
  actions: {
   updatePostForm() {
     this.set('updatePostForm', true);
   },
   update(post) {
     var params = {
       title: this.get('title1'),
       author: this.get('author1'),
       copy: this.get('copy1'),
       image: this.get('image1'),
       category: this.get('category1'),
     };
     console.log(params)
     this.set('updatePostForm', false);
     this.sendAction('update', post, params);
   }
 }
});
