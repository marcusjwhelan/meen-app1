// app/controllers/quote/edit.js
import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        save: function() {
            var d = this.get('model');
            // This saves it to mongoose
            d.save();
            this.transitionToRoute('quote');
            // this will save the update to ember data so it will
            // save change on the webpage and not just in mongoose
            this.get('model').save();
        },
        del: function() {
            // this deletes the mongoose record
            this.get('model').deleteRecord();
            this.transitionToRoute('quote');
            // this deletes the ember-data record
            this.get('model').save();
        }
    }
});
