import Ember from 'ember';
import SaveModelMixin from 'crowd-hero-frontend/mixins/orgs/save-model-mixin';

export default Ember.Route.extend(SaveModelMixin, {
  model: function() {
    return this.store.createRecord('org');
  }
});