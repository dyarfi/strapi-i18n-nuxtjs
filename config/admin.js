module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'eafab7b42371400143983240fed61448'),
  },
});
