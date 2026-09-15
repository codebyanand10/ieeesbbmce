import { createClient } from "@supabase/supabase-js";
import { env } from "$env/dynamic/private";

const FALLBACK_URL = "https://qepfbsvxwtlxanzlvbeb.supabase.co";
const FALLBACK_KEY = "sb_publishable_ZU3-_yHxJeBJ0gv5jWjrfg_s2ZX8fB1";

function getCredentials() {
    const supabaseUrl =
        env.PUBLIC_SUPABASE_URL ||
        env.NEXT_PUBLIC_SUPABASE_URL ||
        env.SUPABASE_URL ||
        (typeof process !== "undefined"
            ? process.env?.PUBLIC_SUPABASE_URL ||
              process.env?.NEXT_PUBLIC_SUPABASE_URL ||
              process.env?.SUPABASE_URL
            : "") ||
        (typeof import.meta !== "undefined" && import.meta.env?.PUBLIC_SUPABASE_URL
            ? import.meta.env.PUBLIC_SUPABASE_URL
            : "") ||
        FALLBACK_URL;

    const supabaseKey =
        env.PUBLIC_SUPABASE_ANON_KEY ||
        env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
        env.SUPABASE_ANON_KEY ||
        env.SUPABASE_SERVICE_ROLE_KEY ||
        (typeof process !== "undefined"
            ? process.env?.PUBLIC_SUPABASE_ANON_KEY ||
              process.env?.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
              process.env?.SUPABASE_ANON_KEY ||
              process.env?.SUPABASE_SERVICE_ROLE_KEY
            : "") ||
        (typeof import.meta !== "undefined" && import.meta.env?.PUBLIC_SUPABASE_ANON_KEY
            ? import.meta.env.PUBLIC_SUPABASE_ANON_KEY
            : "") ||
        FALLBACK_KEY;

    return {
        supabaseUrl: supabaseUrl.trim() || FALLBACK_URL,
        supabaseKey: supabaseKey.trim() || FALLBACK_KEY,
    };
}

const { supabaseUrl, supabaseKey } = getCredentials();
export const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
