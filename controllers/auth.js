export async function checkIfUserIsAuthenticated(req, res, next) {
    if (!req.user) {
        return res.render("no-authenticated");
    }
    next();
}