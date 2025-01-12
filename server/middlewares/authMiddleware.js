const passport = require('passport');
const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');
const User = require('../models/user'); // Adjust the path as necessary

const cookieExtractor = (req) => {
    let token = null;
    if (req && req.cookies) {
        token = req.cookies['token'];
    }
    return token;
};

const opts = {};
opts.jwtFromRequest = cookieExtractor;
opts.secretOrKey = process.env.pass_word;

if (!opts.secretOrKey) {
    console.error('JwtStrategy requires a secret or key');
    process.exit(1); // Exit the process with an error code
}

passport.use(
    new JwtStrategy(opts, async (jwtPayload, done) => {
        try {
            const user = await User.findById(jwtPayload.identifier);
            if (user) {
                return done(null, user);
            } else {
                return done(null, false);
            }
        } catch (error) {
            return done(error, false);
        }
    })
);

const authMiddleware = passport.authenticate('jwt', { session: false });
module.exports = authMiddleware;