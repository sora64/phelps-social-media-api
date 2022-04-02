const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
    {
        username: {
          type: String,
          unique: true,
          required: "Username required.",
          minlength: 1,
        },
        email: {
          type: String,
          unique: true,
          required: "Email required.",
          match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: "Thought",
            },
        ],
        friends: [UserSchema],
      },
      {
        toJSON: {
          virtuals: true,
        },
        id: false,
      }
);

UserSchema.virtual("friendCount").get(function () {
    return this.friends.length;
  });

const User = model('User', UserSchema);

module.exports = User;