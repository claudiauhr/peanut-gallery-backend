import Mongoose from 'mongoose';

/**
 * Holds the Schema reference for mongoose.
 */
const Schema = Mongoose.Schema;

/**
 * MongoDB document model schema.
 */
const TRIVIA_SCHEMA = new Schema({

    title: {
        type: String,
        default: 'Untitled'
    },
    
    author: {
        type: String,
        default: 'Public'
    },

    tags: {
        type: [String],
        default: ['None']
    },

    difficulty: {
        type: Number,
        default: 0
    },

    questions: [
        {
            question: {
                type: String,
                required: true
            },
            correctAnswer: {
                type: String,
                required: true
            },
            incorrectAnswers: {
                type: [String],
                required: true,

                validate: e => {
                    return Array.isArray(e) && e.length > 0
                }

            }
        }
    ]
});