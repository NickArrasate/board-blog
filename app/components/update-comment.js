import Ember from 'ember';

export default Ember.Component.extend({
  updateCommentForm : false,
  actions: {
    displayCommentUpdateForm() {
      this.set('updateCommentForm', true);
    },

    updateComment(comment){
      var params = {
        name: this.get('name1'),
        comment: this.get('comment1'),
        post: this.get('post')
      };
      this.set('updateCommentForm', false);
      this.sendAction('updateComment', comment, params);
    }

  }
});
