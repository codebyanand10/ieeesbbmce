import { createClient } from "@libsql/client/web";
import { env } from "$env/dynamic/private";

const url =
    env.VITE_TURSO_DATABASE_URL ||
    env.TURSO_DATABASE_URL ||
    import.meta.env.VITE_TURSO_DATABASE_URL ||
    (typeof process !== "undefined" ? process.env?.VITE_TURSO_DATABASE_URL || process.env?.TURSO_DATABASE_URL : "") ||
    "";

const authToken =
    env.VITE_TURSO_AUTH_TOKEN ||
    env.TURSO_AUTH_TOKEN ||
    import.meta.env.VITE_TURSO_AUTH_TOKEN ||
    (typeof process !== "undefined" ? process.env?.VITE_TURSO_AUTH_TOKEN || process.env?.TURSO_AUTH_TOKEN : "") ||
    "";

const db = createClient({
    url,
    authToken,
});

export default db;
