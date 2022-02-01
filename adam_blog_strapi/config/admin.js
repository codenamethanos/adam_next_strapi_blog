module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '513ae7ae46597401d7967002c21291e3'),
  },
});
