import Ember from 'ember';

export default Ember.Component.extend({
  commentForm: false,
  actions: {
    submitComment() {
      this.set('commentForm', true);
    },
    deleteComment(comment){
      if(confirm('Delete this comment?')){
        this.sendAction('deleteComment', comment);
      }
    },
    postComment() {
      var params ={
        name: this.get("name"),
        comment: this.get("comment"),
        post: this.get('post')
      };
    console.log(params);
    this.set('commentForm', false);
    this.sendAction('postComment', params);
    this.set('name', '');
    this.set('comment', '');
  }
}
});
