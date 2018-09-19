// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
	production: false,
	app: {
		name: 'Firebase Toolkit',
		subtitle: 'Admin Portal',
		slogan: ''
	},
	// TODO: Replace the values for the keys that follow. Check the documentation.
	fire: {
		auth: {
			apiKey: "AIzaSyDLEGZjd1SXD17nvARHWk-Ynu5XZGITyGk",
			authDomain: "avaapp-db.firebaseapp.com",
			databaseURL: "https://avaapp-db.firebaseio.com",
			projectId: "avaapp-db",
			storageBucket: "avaapp-db.appspot.com",
			messagingSenderId: "272316968901"
		}
	},
	s3: {
		accessKeyId: 'xxxxxREGAP7BPHQ',
		secretAccessKey: 'xxxxxeSkOzmqjhAuP3Kyl1A',
		bucket: 'xxxxx/xxxxx/xxxxx'
	}
};
