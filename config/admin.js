module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '4170630a8b364f67b3f6a24f6d2129b0'),
  },
});
