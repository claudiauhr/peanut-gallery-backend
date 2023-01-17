export default {

    /**
     * Utility method for checking if an object is empty.
     * 
     * @param {*} obj 
     * @returns true if 0 length
     */
    empty: (obj) => {

        return (Object.keys(obj).length === 0);
    },

    /**
     * Utility method for checking if an object is of the same type passed.
     * 
     * @param {*} obj 
     * @param {*} type to check
     * @returns true if {obj} is of same {type}
     */
    is: (obj, other) => {

        if (typeof other !== 'string') {

            throw new Error(`Argument 'other' in method obj.is(obj, other) must be of type String, received ${typeof other}!`);
        }

        return ((typeof obj).toLocaleLowerCase() === other.toLocaleLowerCase());
    },

    /**
     * Checks if an object is an instance of another object.
     * 
     * @param {*} obj 
     * @param {*} other 
     * @returns 
     */
    isOf: (obj, other) => {

        return (obj instanceof other);
    },

    /**
     * Utility method for checking if two objects are the same.
     * 
     * @param {*} obj 
     * @param {*} other 
     * @returns {true} if either expressions pass.
     */
    matches: (obj, other) => {

        return (obj === other);
    }
}