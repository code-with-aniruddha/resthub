const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true
    },
    usertype: {
        type: String,
        required: true
    }
});

userSchema.pre('save', async function(){
    if(this.isModified('password')){
        const salt = await bcrypt.genSalt(10);
        const password = this.get('password');
        const hashed = await bcrypt.hash(password, salt);
        this.set('password', hashed);
    }
    //done();
})

module.exports = mongoose.model('User', userSchema);