import Mongoose from 'mongoose';

/**
 * Holds the Schema reference for mongoose.
 */
const Schema = Mongoose.Schema;

/**
 * MongoDB document model schema.
 */
const ACCOUNT_SCHEMA = new Schema({

    username: {
        type: String,
        required: true,
        unique: true,
    },

    password: {
        type: String,
        required: true
    }

}, { timestamps: true, collection: 'accounts' });

/**
 * Exports the schema model for use in APIHandler's.
 */
export const ACCOUNT_MODEL = Mongoose.model('accounts', ACCOUNT_SCHEMA);