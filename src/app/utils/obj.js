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
    equals: (obj, other) => {

        return (typeof obj === other);
    }
}