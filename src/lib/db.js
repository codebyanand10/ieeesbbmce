import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://qepfbsvxwtlxanzlvbeb.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFlcGZic3Z4d3RseGFuemx2YmViIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODk0NjI1NjYsImV4cCI6MjEwNTAzODU2Nn0.NhBZ6q8UwHLeAulWIFaQ0nAaIWa5TfQnz1X87fl7X0I";

function getEnv(key) {
    if (typeof process !== "undefined" && process.env && process.env[key]) {
        return process.env[key];
    }
    return null;
}

const supabaseUrl =
    getEnv("NEXT_PUBLIC_SUPABASE_URL") ||
    getEnv("PUBLIC_SUPABASE_URL") ||
    getEnv("SUPABASE_URL") ||
    SUPABASE_URL;

const supabaseKey =
    getEnv("NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY") ||
    getEnv("NEXT_PUBLIC_SUPABASE_ANON_KEY") ||
    getEnv("PUBLIC_SUPABASE_ANON_KEY") ||
    getEnv("SUPABASE_ANON_KEY") ||
    getEnv("SUPABASE_SERVICE_ROLE_KEY") ||
    SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl.trim(), supabaseKey.trim(), {
    auth: {
        persistSession: false,
        autoRefreshToken: false,
    },
});

export default supabase;
