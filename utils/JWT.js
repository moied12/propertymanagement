const { sign, verify } = require("jsonwebtoken");
const token_secret = "jOcu7nbC1Oj0vSoFi1fyx4NbYOGWKRGkWzrzaaxAjPk0nFhepVb1lOkEsjc0j49fKMyrCR2zid3B7hTuIAH9OxlxBmgHNbaX4l751LQW1NblYIveueXj6wpP0wBI0KfYxmKqYl6ZbcwRkbaIK8gzaDWGds4dr0od3sCpebsHNbzZYo4N15nrG4zPTFepHufBieI1LeNV"
const createTokens = (user) => {
    const accessToken = sign(
        { email: user.email, id: user.id ,name: user.name, is_admin:user.is_admin},
        token_secret
    );
    return accessToken;
};

const validateToken = (req, res, next) => {
    const accessToken = req.cookies["access-token"];

    if (!accessToken)
        return res.status(400).json({ error: "User not Authenticated!" });

    try {
        const validToken = verify(accessToken, token_secret);
        if (validToken) {
            req.authenticated = true;
            return next();
        }
    } catch (err) {
        return res.status(400).json({ error: err });
    }
};

const getUser= (accessToken)=>{
    let user = verify(accessToken, token_secret);
    delete user.iat;
    return user
}
module.exports = {createTokens, validateToken, getUser};