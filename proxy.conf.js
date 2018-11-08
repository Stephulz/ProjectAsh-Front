const proxy = [
    {
      context: '/api',
      target: 'http://localhost:9000',
    }
  ];
  module.exports = proxy;