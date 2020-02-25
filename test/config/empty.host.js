exports.config = {
	tests: './scenario.js',
	output: './output',
	helpers: {
		REST: {
			endpoint: 'https://reqres.in',
		}
	},
	include: {},
	bootstrap: null,
	mocha: {},
	name: 'codeceptjs-rest-demo',
	plugins: {
		testrail: {
			require: '../../index.js',
			host: '',
			user: 'test',
			password: 'pass',
			suiteId: 1,
			projectId: 1,
			runName: 'Custom run name',
			enabled: true
		  }
	}
};