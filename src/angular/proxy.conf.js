const proxy = [
  {
    context: '/api',
    target: 'https://localhost:7041',
    secure: false,
  }
];
module.exports = proxy;
