import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = "https://yewvuicfqjyzbkericsb.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_9hnbTJXjPw3aS7Dc8f19tA_GCYg1zue";

const client = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export const supabase = {
  async getGastos() {
    const { data, error } = await client
      .from('gastos')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error("❌ Error al obtener gastos:", error.message);
      throw error;
    }
    return data;
  },

  async addGasto({ descripcion, monto, categoria }) {
    const { data, error } = await client
      .from('gastos')
      .insert([{ descripcion, monto, categoria }])
      .select();

    if (error) {
      console.error("❌ Error al guardar gasto:", error.message);
      throw error;
    }
    return data ? data[0] : null;
  },

  async deleteGasto(id) {
    const { error } = await client
      .from('gastos')
      .delete()
      .eq('id', id);

    if (error) {
      console.error("❌ Error al eliminar gasto:", error.message);
      throw error;
    }
    return true;
  },
};
