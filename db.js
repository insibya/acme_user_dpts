const Sequelize = require('sequelize');
const { STRING } = Sequelize;

const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/acme_user_dpts');

const User = conn.define('user', {
  name: String
});

const syncAndSeed = async()=> {
  const users = [
    { name: 'chris'},
    { name: 'bob'},
    { name: 'ruby'},
  ];
  const [ chris, bob, ruby ] = await Promise.all(users.map(user => User.create(user)));
  return {
    users: {
      chris,
      bob,
      ruby
    }
  };
};
