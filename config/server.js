module.exports = {
  APPLICATION_ID:
    process.env.APPLICATION_ID ||
    "8832027a8735f6df05069108b77423ccbda5743d8840cf0888a94b96ecc65979",
  SECRET:
    process.env.SECRET ||
    "d39e45206308dff103d43719e210524963b5f00d9478959296f99f702bb5a7cf",
  CALLBACK_URL: process.env.CALLBACK_URL || "http://localhost:3000"
};
