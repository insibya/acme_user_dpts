const { expect } = require('chai');
const db = require('./db');

describe('Acme_users_dpts', () => {
	let seed;
	beforeEach(async () => (seed = await db.syncAndSeed()));
	describe('Data Layer', () => {
		it('Chris, Bob, Ruby are users', () => {
			expect(seed.users.chris.name).to.equal('chris');
			expect(seed.users.bob.name).to.equal('bob');
			expect(seed.users.ruby.name).to.equal('ruby');
		});
		it('Engineering, marketing and espionage', () => {
			expect(seed.depts.engineering.name).to.equal('engineering');
			expect(seed.depts.marketing.name).to.equal('marketing');
			expect(seed.depts.espionage.name).to.equal('espionage');
		});
	});
});
