const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Password = require('./../services/password');
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

userSchema.pre('save', async function(done){
    if(this.isModified('password')){
        const hashed = await Password.toHash(this.get('password'));
        this.set('password', hashed);
    }
    done();
})

module.exports = mongoose.model('User', userSchema);