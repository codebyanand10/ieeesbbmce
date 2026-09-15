import { createClient } from "@libsql/client/web";
import { b as private_env } from "./shared-server.js";
const url = private_env.VITE_TURSO_DATABASE_URL || private_env.TURSO_DATABASE_URL || "libsql://database-uwulanparty.aws-ap-south-1.turso.io";
const authToken = private_env.VITE_TURSO_AUTH_TOKEN || private_env.TURSO_AUTH_TOKEN || "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3NzAxMjE5MjksImlkIjoiMjQ1NTlkYjItZjQ2OS00ZTI4LTk4Y2YtMGMwYmExYzEyYzc2IiwicmlkIjoiMDE1ZmZkNGUtOWIzYS00ZDRiLWE4NjUtNjFlY2QwZjBkM2VmIn0.7J5R5HJz_nW8qjblyrlo74mcygctZ8ISfUXyKCifKBL60kgMVt8-R3CcsWf5HqM3HkTYFw7gCL6Iu7kfEcQjDw";
const db = createClient({
  url,
  authToken
});
export {
  db as d
};
