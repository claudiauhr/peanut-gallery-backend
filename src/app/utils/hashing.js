import Hasher from 'bcrypt';

/**
 * Returns a hashed string using bcrypt of the input passed.
 * 
 * @param {*} input
 */
export const generateHashed = input => {

    return Hasher.hash(input, 10);
}

/**
 * Returns a boolean state if the input string hashed matches
 * the cimparable against hash.
 * 
 * @param {*} input 
 * @param {*} against 
 * @returns 
 */
export const matchesHashed = (input, against) => {

    return Hasher.compare(input, against);
}