import Hasher from 'bcrypt';

module.exports = {

    /**
     * Returns a hashed string using bcrypt of the input passed.
     * 
     * @param {*} input
     */
    generate: input => {

        return Hasher.hash(input, 10);
    },

    /**
     * Returns a boolean state if the input string hashed matches
     * the cimparable against hash.
     * 
     * @param {*} input 
     * @param {*} against 
     * @returns 
     */
    matches: (input, against) => {

        return Hasher.compare(input, against);
    }
}