import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.findRecord('post', params.post_id);
  },
  actions: {
    deleteComment(comment){
      comment.destroyRecord();
      this.transitionTo('game-post');
    },
    postComment(params){
      var newComment = this.store.createRecord('comment', params);
      var post = params.post;
      post.get('comments').addObject(newComment);
      newComment.save().then(function(){
        return post.save();
      });
      this.transitionTo('game-post', params.post);
    },

    updateComment(comment, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          comment.set(key,params[key]);
        }
      });
      console.log(params);
      comment.save();
      this.transitionTo('game-post');
    }
  }
});
