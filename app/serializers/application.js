// app/serializers/application.js

import DS from 'ember-data';
export default DS.RESTSerializer.extend({  
    primaryKey: '_id'

});

/*import Ember from 'ember';
import JSONSerializer from 'ember-data/serializers/json';

export default JSONSerializer.extend({
  primaryKey: '_id'
});*/