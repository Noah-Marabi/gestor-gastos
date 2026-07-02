// Importa el cliente oficial de Supabase para comunicarse con la base de datos.
import { createClient } from '@supabase/supabase-js';

// Obtiene las credenciales desde las variables de entorno (.env).
const SUPABASE_URL = import.meta.env.PUBLIC_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

// Crea una única conexión (cliente) con Supabase.
const client = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Objeto que reúne todas las operaciones sobre la tabla "gastos".
export const supabase = {

  // Obtiene todos los gastos almacenados y los ordena
  // por fecha de creación (del más reciente al más antiguo).
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

  // Inserta un nuevo gasto en la tabla "gastos".
  async addGasto({ descripcion, monto, categoria }) {
    const { data, error } = await client
      .from('gastos')
      .insert([{ descripcion, monto, categoria }])
      .select();

    if (error) {
      console.error("❌ Error al guardar gasto:", error.message);
      throw error;
    }

    // Devuelve el registro recién creado.
    return data ? data[0] : null;
  },

  // Elimina un gasto utilizando su ID.
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