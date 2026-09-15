import * as server from '../entries/pages/events/_page.server.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/events/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/events/+page.server.js";
export const imports = ["_app/immutable/nodes/6.BcazQYHl.js","_app/immutable/chunks/Dh-2-DoM.js","_app/immutable/chunks/CUHtDtEh.js","_app/immutable/chunks/Xtw4Ahgu.js","_app/immutable/chunks/C0_zMl_t.js","_app/immutable/chunks/BnKzyM-f.js","_app/immutable/chunks/CpsVttOy.js","_app/immutable/chunks/BnYzJgoT.js","_app/immutable/chunks/Bd_iu4l5.js"];
export const stylesheets = ["_app/immutable/assets/6.FMm1p4nk.css"];
export const fonts = [];
