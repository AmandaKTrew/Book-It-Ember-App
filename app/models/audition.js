import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  content: DS.attr('string'),
  userId: DS.attr('number'),
  postDate: DS.attr('date'), 
  comments: DS.hasMany('comment', {async: true}),
  user: DS.belongsTo('user', {async: true})
});
