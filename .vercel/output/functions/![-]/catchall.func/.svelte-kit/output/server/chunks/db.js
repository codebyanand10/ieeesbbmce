import { createClient } from "@libsql/client";
const db = createClient({
  url: "libsql://database-uwulanparty.aws-ap-south-1.turso.io",
  authToken: "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3NzAxMjE5MjksImlkIjoiMjQ1NTlkYjItZjQ2OS00ZTI4LTk4Y2YtMGMwYmExYzEyYzc2IiwicmlkIjoiMDE1ZmZkNGUtOWIzYS00ZDRiLWE4NjUtNjFlY2QwZjBkM2VmIn0.7J5R5HJz_nW8qjblyrlo74mcygctZ8ISfUXyKCifKBL60kgMVt8-R3CcsWf5HqM3HkTYFw7gCL6Iu7kfEcQjDw"
});
export {
  db as d
};
