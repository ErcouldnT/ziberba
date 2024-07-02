import { z } from "zod";

const envSchema = z.object({
  EXPO_PUBLIC_SUPABASE_URL: z.string().min(1),
  EXPO_PUBLIC_SUPABASE_ANON_KEY: z.string().min(1),
});

export const env = envSchema.parse(process.env);
