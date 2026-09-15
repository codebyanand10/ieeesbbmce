import { createClient } from "@libsql/client/web";
import { env } from "$env/dynamic/private";

const FALLBACK_URL = "libsql://database-uwulanparty.aws-ap-south-1.turso.io";
const FALLBACK_TOKEN = "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3NzAxMjE5MjksImlkIjoiMjQ1NTlkYjItZjQ2OS00ZTI4LTk4Y2YtMGMwYmExYzEyYzc2IiwicmlkIjoiMDE1ZmZkNGUtOWIzYS00ZDRiLWE4NjUtNjFlY2QwZjBkM2VmIn0.7J5R5HJz_nW8qjblyrlo74mcygctZ8ISfUXyKCifKBL60kgMVt8-R3CcsWf5HqM3HkTYFw7gCL6Iu7kfEcQjDw";

function getClient() {
    const url =
        env.TURSO_DATABASE_URL ||
        env.VITE_TURSO_DATABASE_URL ||
        (typeof process !== "undefined" ? (process.env?.TURSO_DATABASE_URL || process.env?.VITE_TURSO_DATABASE_URL) : "") ||
        (typeof import.meta !== "undefined" && import.meta.env?.VITE_TURSO_DATABASE_URL ? import.meta.env.VITE_TURSO_DATABASE_URL : "") ||
        FALLBACK_URL;

    const authToken =
        env.TURSO_AUTH_TOKEN ||
        env.VITE_TURSO_AUTH_TOKEN ||
        (typeof process !== "undefined" ? (process.env?.TURSO_AUTH_TOKEN || process.env?.VITE_TURSO_AUTH_TOKEN) : "") ||
        (typeof import.meta !== "undefined" && import.meta.env?.VITE_TURSO_AUTH_TOKEN ? import.meta.env.VITE_TURSO_AUTH_TOKEN : "") ||
        FALLBACK_TOKEN;

    return createClient({
        url: url.trim() || FALLBACK_URL,
        authToken: authToken.trim() || FALLBACK_TOKEN,
    });
}

const db = {
    /**
     * @param {import('@libsql/client/web').InStatement} stmt
     */
    execute: (stmt) => getClient().execute(stmt),
    /**
     * @param {import('@libsql/client/web').InStatement[]} stmts
     */
    batch: (stmts) => getClient().batch(stmts),
};

export default db;
