// // config/passport.js
// import passport from "passport";
// import { Strategy as GoogleStrategy } from "passport-google-oauth20";
// import dotenv from "dotenv";
// import User from "../models/User.js";

// dotenv.config(); // Make sure env variables are loaded

// // Debug: check if env variables are loaded correctly
// console.log("GOOGLE_CLIENT_ID:", process.env.GOOGLE_CLIENT_ID);
// console.log("GOOGLE_CLIENT_SECRET:", process.env.GOOGLE_CLIENT_SECRET);
// console.log("GOOGLE_CALLBACK_URL:", process.env.GOOGLE_CALLBACK_URL);

// // Passport Google OAuth Strategy
// passport.use(
//   new GoogleStrategy(
//     {
//       clientID: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//       callbackURL: process.env.GOOGLE_CALLBACK_URL, // Must match exactly in Google Cloud Console
//     },
//     async (accessToken, refreshToken, profile, done) => {
//       try {
//         // Check if user already exists
//         let user = await User.findOne({ googleId: profile.id });

//         if (!user) {
//           // If not, create a new user
//           user = await User.create({
//             name: profile.displayName,
//             email: profile.emails[0].value,
//             googleId: profile.id,
//             role: "gardener", // default role
//             password: "", // not needed for Google login
//           });
//         }

//         return done(null, user);
//       } catch (err) {
//         return done(err, null);
//       }
//     }
//   )
// );

// // Serialize user into session
// passport.serializeUser((user, done) => {
//   done(null, user.id);
// });

// // Deserialize user from session
// passport.deserializeUser(async (id, done) => {
//   try {
//     const user = await User.findById(id);
//     done(null, user);
//   } catch (err) {
//     done(err, null);
//   }
// });

// export default passport;
