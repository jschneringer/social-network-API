const { Schema, model, Types } = require("mongoose");
const moment = require("moment");

//Reaction Schema
const reactionsSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxLength: 280,
    },
    userName: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) =>
        moment(createdAtVal).format("MMM DD, YYYY [at] hh:mm a"),
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const thoughtSchema = new Schema (
    {
        thoughtText: {
            type: String,
            required: true, 
            maxlength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (createdAtVal) => moment(createdAtVal).format("MMM DD, YYYY [at] hh:mm a"),
        },
        userName: {
            type: String,
            required: true,
        },
        reactions: [reactionsSchema],
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,

        },
        id: false,
    }
);

//gets all reactions
thoughtSchema.virtual("reactionsCount").get(function(){
    return this.reactions.length;

});

const Thought = model ('Thought', thoughtSchema);

module.exports = Thought;