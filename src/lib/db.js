import { createClient } from "@libsql/client/web";
import { env } from "$env/dynamic/private";

const FALLBACK_URL = "libsql://database-uwulanparty.aws-ap-south-1.turso.io";
const FALLBACK_TOKEN = "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3NzAxMjE5MjksImlkIjoiMjQ1NTlkYjItZjQ2OS00ZTI4LTk4Y2YtMGMwYmExYzEyYzc2IiwicmlkIjoiMDE1ZmZkNGUtOWIzYS00ZDRiLWE4NjUtNjFlY2QwZjBkM2VmIn0.7J5R5HJz_nW8qjblyrlo74mcygctZ8ISfUXyKCifKBL60kgMVt8-R3CcsWf5HqM3HkTYFw7gCL6Iu7kfEcQjDw";

function cleanUrl(val) {
    if (!val || typeof val !== "string") return FALLBACK_URL;
    let s = val.trim();
    if (s.includes("=")) {
        s = s.substring(s.indexOf("=") + 1).trim();
    }
    s = s.replace(/^["']|["']$/g, "").trim();
    if (!s.startsWith("libsql://") && !s.startsWith("https://") && !s.startsWith("http://")) {
        return FALLBACK_URL;
    }
    return s;
}

function cleanToken(val) {
    if (!val || typeof val !== "string") return FALLBACK_TOKEN;
    let s = val.trim();
    if (s.includes("=")) {
        s = s.substring(s.indexOf("=") + 1).trim();
    }
    s = s.replace(/^["']|["']$/g, "").trim();
    if (s.length < 20) {
        return FALLBACK_TOKEN;
    }
    return s;
}

function getClient() {
    const rawUrl =
        env.TURSO_DATABASE_URL ||
        env.TURSO_URL ||
        env.STORAGE_URL ||
        env.STORAGE_DATABASE_URL ||
        env.VITE_TURSO_DATABASE_URL ||
        (typeof process !== "undefined"
            ? process.env?.TURSO_DATABASE_URL ||
              process.env?.TURSO_URL ||
              process.env?.STORAGE_URL ||
              process.env?.STORAGE_DATABASE_URL ||
              process.env?.VITE_TURSO_DATABASE_URL
            : "") ||
        (typeof import.meta !== "undefined" && import.meta.env?.VITE_TURSO_DATABASE_URL ? import.meta.env.VITE_TURSO_DATABASE_URL : "") ||
        FALLBACK_URL;

    const rawToken =
        env.TURSO_AUTH_TOKEN ||
        env.TURSO_GROUP_AUTH_TOKEN ||
        env.STORAGE_AUTH_TOKEN ||
        env.STORAGE_GROUP_AUTH_TOKEN ||
        env.VITE_TURSO_AUTH_TOKEN ||
        (typeof process !== "undefined"
            ? process.env?.TURSO_AUTH_TOKEN ||
              process.env?.TURSO_GROUP_AUTH_TOKEN ||
              process.env?.STORAGE_AUTH_TOKEN ||
              process.env?.STORAGE_GROUP_AUTH_TOKEN ||
              process.env?.VITE_TURSO_AUTH_TOKEN
            : "") ||
        (typeof import.meta !== "undefined" && import.meta.env?.VITE_TURSO_AUTH_TOKEN ? import.meta.env.VITE_TURSO_AUTH_TOKEN : "") ||
        FALLBACK_TOKEN;

    const url = cleanUrl(rawUrl);
    const authToken = cleanToken(rawToken);

    return createClient({
        url,
        authToken,
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
