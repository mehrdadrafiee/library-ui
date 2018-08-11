import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    changeFirst(value) {
      this.set('first', value);
    }
  }
});
