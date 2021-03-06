/**
 * Todo.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    title: {
      type: 'string',
      defaultsTo: 'Nouvelle tâche',
      required: true
    },
    complete: {
      type: 'boolean',
      defaultsTo: false
    },
    author : {
      type:'string',
      defaultsTo: 'Anonymous'
    }
  }
};
