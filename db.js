const Sequelize = require('sequelize');
const { STRING, UUID, UUIDV4 } = Sequelize;

const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/acme_user_dpts');

const User = conn.define('user', {
	id: {
		type: UUID,
		primaryKey: true,
		defaultValue: UUIDV4
	},
	name: {
		type: String,
		allowNull: false,
		unique: true
	},
	deptId: UUID
});

const Dept = conn.define('dept', {
	id: {
		type: UUID,
		primaryKey: true,
		defaultValue: UUIDV4
	},
	name: {
		type: String,
		allowNull: false,
		unique: true
	}
});

const syncAndSeed = async () => {
	const users = [ { name: 'chris' }, { name: 'bob' }, { name: 'ruby' } ];
	const [ chris, bob, ruby ] = await Promise.all(users.map((user) => User.create(user)));

	const depts = [ { name: 'engineering' }, { name: 'marketing' }, { name: 'espionage' } ];
	const [ engineering, marketing, espionage ] = await Promise.all(depts.map((dept) => Dept.create(dept)));

	return {
		users: {
			chris,
			bob,
			ruby
		},
		depts: {
			engineering,
			marketing,
			espionage
		}
	};
};
