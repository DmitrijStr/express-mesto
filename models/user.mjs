import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true,
  },
  about: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true,
  },
  avatar: {
    type: String,
    required: true,
    validate: {
      validator: function validate(v) {
        return /https?:\/\/(.*)/g.test(v);
      },
      message: (props) => `${props.value} is not a valid url!`,
    },
  },
});

const userModer = mongoose.model('user', userSchema);

export default userModer;
