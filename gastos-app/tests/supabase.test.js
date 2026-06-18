import { describe, it, expect } from "vitest";
import { supabase } from "../src/lib/supabase.js";

describe("Supabase config", () => {
  it("debe tener una URL válida", () => {
    expect(supabase.url).toContain("supabase.co");
  });

  it("debe generar headers con apikey", () => {
    expect(supabase.headers.apikey).toBeDefined();
    expect(supabase.headers.Authorization).toContain("Bearer");
  });
});