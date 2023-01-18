/**
 * Checks if a client is authenticated (logged in).
 * 
 * @param {*} request 
 * @param {*} response 
 * @param {*} next 
 * @returns 
 */
export const authenticated = (request, response, next) => {

    return (request.session.isLoggedIn ? next() : response.json( { error: 'You are not authenticated for this route!' } ))
}
