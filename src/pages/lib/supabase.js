import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://yewvuicfqjyzbkericsb.supabase.co'
const supabaseKey = 'sb_publishable_9hnbTJXjPw3aS7Dc8f19tA_GCYg1zue'

export const supabase = createClient(supabaseUrl, supabaseKey)