import * as server from '../entries/pages/execom/_id_/_page.server.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/execom/_id_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/execom/[id]/+page.server.js";
export const imports = ["_app/immutable/nodes/8.DQXCm7Rq.js","_app/immutable/chunks/Dh-2-DoM.js","_app/immutable/chunks/CUHtDtEh.js","_app/immutable/chunks/Xtw4Ahgu.js","_app/immutable/chunks/C0_zMl_t.js","_app/immutable/chunks/BnKzyM-f.js","_app/immutable/chunks/CpsVttOy.js","_app/immutable/chunks/Bd_iu4l5.js","_app/immutable/chunks/O82ATgoS.js","_app/immutable/chunks/Dcrl-L_5.js","_app/immutable/chunks/DMSbvwb8.js"];
export const stylesheets = ["_app/immutable/assets/8.BqqMnzZ5.css"];
export const fonts = [];
