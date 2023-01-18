function isAuth(request, response, next) {
    return request.isAuthenticated()
        ? next()
        : response.json(
            { "error": "You are not logged in!" }
        )
}

export default isAuth