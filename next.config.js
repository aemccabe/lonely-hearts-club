const webpack = require("webpack");
/**
 * After the next require you can use process.env to get your secrets
 */
if (process.env.NODE_ENV !== "production") {
  require("now-env");
}

/**
 * If some of the envs are public, like a google maps key, but you still
 * want to keep them secret from the repo, the following code will allow you
 * to share some variables with the client, configured at compile time.
 */
module.exports = {
  target: "serverless",
  env: {
    FIREBASE_PROJECT_ID: "lonely-hearts"
  }
};
