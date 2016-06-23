import Model from 'ember-data/model';
//import DS from 'ember-data';
import attr from 'ember-data/attr';

export default Model.extend({
  quote: attr('string'),
  author: attr('string')
});
