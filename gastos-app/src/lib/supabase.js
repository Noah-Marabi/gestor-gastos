// ============================================================
// src/lib/supabase.js
// Módulo de conexión con Supabase
// ============================================================

// 🔧 CONFIGURACIÓN: Reemplazá estos valores con los tuyos de Supabase
// Los encontrás en: Project Settings → API
const SUPABASE_URL = "https://yewvuicfqjyzbkericsb.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_9hnbTJXjPw3aS7Dc8f19tA_GCYg1zue";

// ─────────────────────────────────────────────
// Cliente de Supabase (usando la REST API directo,
// sin instalar ninguna librería npm)
// ─────────────────────────────────────────────

export const supabase = {
  url: SUPABASE_URL,
  key: SUPABASE_ANON_KEY,

  // Headers que se usan en todos los requests
  get headers() {
    return {
      "Content-Type": "application/json",
      "apikey": this.key,
      "Authorization": `Bearer ${this.key}`,
    };
  },

  // ── Obtener todos los gastos, ordenados por fecha descendente ──
  async getGastos() {
    const res = await fetch(
      `${this.url}/rest/v1/gastos?order=created_at.desc&select=*`,
      { headers: this.headers }
    );

    if (!res.ok) {
      const err = await res.json();
      console.error("❌ Error al obtener gastos:", err);
      throw new Error(err.message || "Error al obtener gastos");
    }

    return await res.json(); // devuelve array de gastos
  },

  // ── Insertar un nuevo gasto ──
  async addGasto({ descripcion, monto, categoria }) {
    const res = await fetch(`${this.url}/rest/v1/gastos`, {
      method: "POST",
      headers: {
        ...this.headers,
        "Prefer": "return=representation", // devuelve el registro creado
      },
      body: JSON.stringify({ descripcion, monto, categoria }),
    });

    if (!res.ok) {
      const err = await res.json();
      console.error("❌ Error al guardar gasto:", err);
      throw new Error(err.message || "Error al guardar el gasto");
    }

    const data = await res.json();
    return data[0]; // devuelve el objeto creado
  },

  // ── Eliminar un gasto por ID ──
  async deleteGasto(id) {
    const res = await fetch(`${this.url}/rest/v1/gastos?id=eq.${id}`, {
      method: "DELETE",
      headers: this.headers,
    });

    if (!res.ok) {
      const err = await res.json();
      console.error("❌ Error al eliminar gasto:", err);
      throw new Error(err.message || "Error al eliminar el gasto");
    }

    return true;
  },
};
