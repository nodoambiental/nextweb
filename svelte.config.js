import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import { resolve } from 'path';
import readjson from 'readjson';

const TSConfig = readjson.sync('./tsconfig.json');

const tsPaths = TSConfig.compilerOptions.paths;

const tsPathsKeys = Object.keys(tsPaths);
const tsPathsValues = Object.values(tsPaths).flat();

if (tsPathsKeys.length !== tsPathsValues.length) {
	console.log(tsPathsKeys.length);
	console.log(tsPathsValues.length);
	console.log(tsPathsKeys);
	console.log(tsPathsValues);
	throw new Error('Paths are not 1:1 referenced.');
}

const aliases = {};

tsPathsKeys.forEach((key, index) => {
	aliases[key] = resolve(tsPathsValues[index]);
});

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],

	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [preprocess({}), mdsvex(mdsvexConfig)],

	kit: {
		adapter: adapter(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		vite: {
			resolve: {
				alias: aliases
			}
		}
	}
};

export default config;
