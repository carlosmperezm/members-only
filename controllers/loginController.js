
export async function getLoginForm(req, res) {
    if (req.session.messages) {
        const errors = req.session.messages
            .map((message) => { return { msg: message } });
        res.render("login", { errors });
        req.session.messages = undefined;
    } else {
        res.render("login");
    }
}
export async function getSuccessLoginPage(req, res) {
    return res.render("loggedInConfirmation");
}