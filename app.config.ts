import 'dotenv/config';
import { ConfigContext } from "expo/config";

export default ({ config }: ConfigContext) => ({
  ...config,
  extra: {
    EXPO_PUBLIC_SUPABASE_URL: process.env.EXPO_PUBLIC_SUPABASE_URL,
    EXPO_PUBLIC_SUPABASE_ANON: process.env.EXPO_PUBLIC_SUPABASE_ANON,
  },
});
