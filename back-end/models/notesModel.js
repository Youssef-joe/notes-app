const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const notesSchema = new Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    tags: { type: [String], required: true },
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    createdOn: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Notes', notesSchema);
