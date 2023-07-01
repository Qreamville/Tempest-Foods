import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl!, supabaseKey!, {
  auth: {
    persistSession: false,
  },
});

export async function getMeals(params: any) {
  try {
    if (params.category === undefined) {
      let { data: food } = await supabase.from("food").select("*");
      return food;
    } else if (params.category !== undefined) {
      let { data: food } = await supabase
        .from("food")
        .select("*")
        .eq("category", params.category);
      return food;
    }
  } catch (error: any) {
    throw new Error(error);
  }
}
