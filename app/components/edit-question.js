import Ember from 'ember';

export default Ember.Component.extend({
  editQuestion: false,
  actions: {
    editFormShow() {
      this.set('editQuestion', true);
    },
    saveEdit(question) {
      var params = {
        author: this.get('question.author'),
        content: this.get('question.content'),
        notes: this.get('question.notes')
      };
      this.set('editQuestion', false);
      this.sendAction('saveEdit', question, params);
    },
    cancel() {
      this.set('editQuestion', false);
    }
  }
});
