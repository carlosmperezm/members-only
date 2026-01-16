
export async function getLoginForm(req, res) {
    res.render("login");
}
export async function login(req, res) {
    if (req.isAuthenticated) {
        return res.send("You're logged in :)");
    }
    res.send("You're logged out :(");
}