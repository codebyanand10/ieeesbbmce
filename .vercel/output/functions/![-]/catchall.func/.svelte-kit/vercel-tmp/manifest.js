export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.svg","fonts/Ubuntu/Ubuntu-Bold.ttf","fonts/Ubuntu/Ubuntu-BoldItalic.ttf","fonts/Ubuntu/Ubuntu-Italic.ttf","fonts/Ubuntu/Ubuntu-Light.ttf","fonts/Ubuntu/Ubuntu-LightItalic.ttf","fonts/Ubuntu/Ubuntu-Medium.ttf","fonts/Ubuntu/Ubuntu-MediumItalic.ttf","fonts/Ubuntu/Ubuntu-Regular.ttf","fonts/Ubuntu/UFL.txt","robots.txt"]),
	mimeTypes: {".svg":"image/svg+xml",".ttf":"font/ttf",".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.nwMhtfco.js",app:"_app/immutable/entry/app.WJ65DJd9.js",imports:["_app/immutable/entry/start.nwMhtfco.js","_app/immutable/chunks/BLO-Uz9G.js","_app/immutable/chunks/CUHtDtEh.js","_app/immutable/chunks/DMSbvwb8.js","_app/immutable/entry/app.WJ65DJd9.js","_app/immutable/chunks/PPVm8Dsz.js","_app/immutable/chunks/CUHtDtEh.js","_app/immutable/chunks/Xtw4Ahgu.js","_app/immutable/chunks/C0_zMl_t.js","_app/immutable/chunks/BnKzyM-f.js","_app/immutable/chunks/Dh-2-DoM.js","_app/immutable/chunks/DMSbvwb8.js","_app/immutable/chunks/CpsVttOy.js","_app/immutable/chunks/CR0InYpw.js","_app/immutable/chunks/DoL0Isfq.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js')),
			__memo(() => import('../output/server/nodes/4.js')),
			__memo(() => import('../output/server/nodes/5.js')),
			__memo(() => import('../output/server/nodes/6.js')),
			__memo(() => import('../output/server/nodes/7.js')),
			__memo(() => import('../output/server/nodes/8.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/admin",
				pattern: /^\/admin\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/events",
				pattern: /^\/events\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/execom",
				pattern: /^\/execom\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/execom/[id]",
				pattern: /^\/execom\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
