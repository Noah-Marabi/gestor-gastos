# 💸 Mis Gastos — App de gestión de gastos personales

Stack: **HTML + TailwindCSS + JavaScript** dentro de **Astro**, con **Supabase** como backend.

---

## 📁 Estructura del proyecto

```
gastos-app/
├── src/
│   ├── lib/
│   │   └── supabase.js       ← Cliente de Supabase (SDK oficial)
├── .env                      ← Variables de entorno (No subir a Git)
│   └── pages/
│       └── index.astro       ← Página principal (HTML + JS)
├── astro.config.mjs
├── package.json
├── supabase-schema.sql       ← Script SQL para crear la tabla
└── README.md
```

---

## 🚀 Paso a paso: Configurar Supabase

### 1. Crear una cuenta y proyecto en Supabase

1. Andá a [https://supabase.com](https://supabase.com) y creá una cuenta gratuita.
2. Hacé clic en **"New project"**.
3. Poné un nombre (ej: `gastos-app`), elegí una región cercana (ej: *South America - São Paulo*) y una contraseña de base de datos.
4. Esperá ~2 minutos a que el proyecto se inicialice.

---

### 2. Crear la tabla `gastos`

1. En el panel de Supabase, andá al **SQL Editor** (ícono `<>` en la barra lateral).
2. Hacé clic en **"New query"**.
3. Copiá y pegá el contenido del archivo `supabase-schema.sql`.
4. Hacé clic en **"Run"** (▶).
5. Deberías ver `Success. No rows returned.` — la tabla fue creada.

---

### 3. Obtener las credenciales de la API

1. En Supabase, andá a **Project Settings** (ícono ⚙️).
2. Hacé clic en **API** en el menú izquierdo.
3. Vas a ver dos valores que necesitás:
   - **Project URL** → algo como `https://xyzxyzxyz.supabase.co`
   - **anon public key** → una cadena larga que empieza con `eyJ...`

---

### 4. Pegar las credenciales en el código

Crea un archivo llamado `.env` en la raíz de la carpeta `gastos-app` con el siguiente contenido:
```env
PUBLIC_SUPABASE_URL=tu_url_aqui
PUBLIC_SUPABASE_ANON_KEY=tu_anon_key_aqui
```

> ⚠️ **No commitees las claves reales a un repositorio público.**
> Para producción, usá variables de entorno (`.env`).

---

## 🛠️ Instalar y correr el proyecto

```bash
# 1. Entrar a la carpeta
cd gastos-app

# 2. Instalar dependencias
npm install

# 3. Correr en modo desarrollo
npm run dev
```

Abrí el navegador en `http://localhost:4321` — ¡listo!

---

## 📦 Build para producción

```bash
npm run build
# Los archivos estáticos quedan en /dist/
```

Podés subir la carpeta `/dist/` a **Netlify**, **Vercel**, o cualquier hosting estático.

---

## 🔧 Funcionalidades

| Feature | Detalle |
|---|---|
| ➕ Agregar gastos | Descripción, monto y categoría |
| 📋 Listar gastos | Ordenados por fecha descendente |
| 💰 Total automático | Se recalcula cada vez que cargás o agregás |
| 🗑️ Eliminar gastos | Botón ✕ en cada ítem |
| ✅ Validación | Inputs vacíos y monto inválido |
| ⚠️ Toast de errores | Mensajes no intrusivos en pantalla |
| 🏷️ Categorías | Comida, Transporte, Ocio, Otros |

---

## 🐛 Problemas comunes

**Error: "Failed to fetch"**
→ Revisá que la `SUPABASE_URL` y `SUPABASE_ANON_KEY` en `supabase.js` sean correctas.

**Error: "permission denied for table gastos"**
→ Asegurate de haber ejecutado el script SQL completo (incluyendo la política RLS).

**Los gastos no aparecen**
→ Abrí DevTools → Console y fijate si hay errores. También revisá DevTools → Network para ver las respuestas de la API.
