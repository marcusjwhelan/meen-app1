import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {  
        save: function() {
            /*
                -fill with old quote and author
                -create ember data of quote and author
                -clear both
                -save to mongoose by meens of post
                -show quote.hbs page
            */
                var quote = this.get('quote');
                var author= this.get('author');
                quote = this.store.createRecord('quote', {
                        author:author,
                        quote:quote
                });
                this.set('quote','');
                this.set('author','');
                quote.save();
                this.transitionToRoute('quote');

        }
}
});
