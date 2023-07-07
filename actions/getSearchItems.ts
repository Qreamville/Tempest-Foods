import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl!, supabaseKey!, {
  auth: {
    persistSession: false,
  },
});

export async function getSearchItems(params: string) {
  try {
    const { data, error } = await supabase
      .from("food")
      .select()
      .textSearch("title", `'${params}'`);
    return { data, error };
  } catch (error: any) {
    throw new Error(error);
  }
}
