const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const community_schema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      index: true,
    },
    user_list: {
      type: [ mongoose.SchemaTypes.ObjectId ],
      ref: 'User',
      required: true,
    },
    message_list: {
        type: [ mongoose.SchemaTypes.ObjectId ],
        ref: 'Message'
    }
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
community_schema.plugin(toJSON);

/**
 * @typedef Community
 */
const Community = mongoose.model('Community', community_schema);

module.exports = Community;
