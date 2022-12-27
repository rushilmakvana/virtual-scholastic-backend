const jwt = require("jsonwebtoken");

module.exports.session = (request, response, next) => {
  const token = request.get("Authorization");
  console.log("called here");
  console.log(token);
  if (token) {
    jwt.verify(token, "auth-token", (error, decode) => {
      console.log("decode  - ", decode);
      if (error) {
        response.status(401).json({
          status: 401,
          isloggedin: false,
          err: "Authentication failed (unable to authenticate access token)",
        });
      } else {
        request.decode = decode;
        console.log(request.decode);
        next();
      }
    });
  } else {
    response.status(401).json({
      status: 401,
      isloggedin: false,
      err: "Unauthorised access",
    });
  }
};
