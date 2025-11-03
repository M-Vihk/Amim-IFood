import Constants from "expo-constants";
import { createClient } from "@supabase/supabase-js";

const { EXPO_PUBLIC_SUPABASE_URL, EXPO_PUBLIC_SUPABASE_ANON } = Constants.expoConfig?.extra ?? {};

export const URL : string = EXPO_PUBLIC_SUPABASE_URL;
export const ANON : string = EXPO_PUBLIC_SUPABASE_ANON;

export const supabase = createClient(URL, ANON);
