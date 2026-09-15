import * as server from '../entries/pages/admin/_page.server.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin/+page.server.js";
export const imports = ["_app/immutable/nodes/4.DGSMCRIz.js","_app/immutable/chunks/Dh-2-DoM.js","_app/immutable/chunks/CUHtDtEh.js","_app/immutable/chunks/C0_zMl_t.js","_app/immutable/chunks/CpsVttOy.js","_app/immutable/chunks/BnYzJgoT.js","_app/immutable/chunks/Bd_iu4l5.js","_app/immutable/chunks/BkCE2b-i.js","_app/immutable/chunks/DoL0Isfq.js","_app/immutable/chunks/O82ATgoS.js"];
export const stylesheets = ["_app/immutable/assets/4.0GANMXAf.css"];
export const fonts = [];
