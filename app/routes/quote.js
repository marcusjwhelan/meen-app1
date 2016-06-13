import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
        //this serches for the model quote = quote.js
        return this.store.findAll('quote');
    }
});
