/**
 * ═══════════════════════════════════════════════════════
 * CONFIG LOADER — The Exhale Sanctuary
 * ═══════════════════════════════════════════════════════
 * Centralized environment and configuration management.
 * Loads from .env variables at build time (Vite).
 */

/* ─── ENVIRONMENT VARIABLES ─── */
const ENV = {
  // Supabase
  SUPABASE_URL: import.meta.env.VITE_SUPABASE_URL || 'https://julxwxgcmdgykgnbsijr.supabase.co',
  SUPABASE_KEY: import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp1bHh3eGdjbWRneWtnbmJzaWpyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgwOTQ0MzIsImV4cCI6MjA5MzY3MDQzMn0.SLI7-kEwUQ9229Cw2MsDuQmNIzTQSjZiqvAe7cMrtN4',

  // Web3Forms
  WEB3FORMS_KEY: import.meta.env.VITE_WEB3FORMS_KEY || 'ed7e9c52-d261-43e4-be95-c40c50ee0ec0',

  // Audio CDN
  AUDIO_CDN_URL: import.meta.env.VITE_AUDIO_CDN_URL || '',

  // App metadata
  APP_NAME: import.meta.env.VITE_APP_NAME || 'The Exhale Sanctuary',
  APP_URL: import.meta.env.VITE_APP_URL || window.location.origin,

  // Feature flags
  ENABLE_BOOKMARKS: import.meta.env.VITE_ENABLE_BOOKMARKS !== 'false',
  ENABLE_TIER_COMPARISON: import.meta.env.VITE_ENABLE_TIER_COMPARISON !== 'false',
};

/* ─── VALIDATION ─── */
function validateConfig() {
  if (!ENV.SUPABASE_URL || !ENV.SUPABASE_KEY) {
    console.warn('⚠️ Supabase config incomplete. Auth features will not work.');
  }
  if (!ENV.WEB3FORMS_KEY) {
    console.warn('⚠️ Web3Forms key missing. Contact form will not work.');
  }
}

/* ─── TIER DEFINITIONS ─── */
const TIER_DATA = {
  'Seed Sister': {
    id: 'seed',
    level: 1,
    price: 'Free',
    priceSub: 'Always',
    features: [
      'Core meditation library',
      'Community circle access',
      'Monthly ritual calendar',
      'Journal prompt library',
    ],
    rituals: [
      { e: '🕉️', n: 'Morning Meditation', m: '15 min · Daily' },
      { e: '✨', n: 'Evening Reset', m: '20 min · Nightly' },
      { e: '🌙', n: 'Sleep Sanctuary', m: 'Guided Journey' },
      { e: '🧘‍♀️', n: 'Breathwork', m: '10 min · Anytime' },
    ],
    resources: '100+ curated resources — meditation guides, journal prompts, and monthly wellness content.',
    checkoutUrl: 'https://square.link/u/XZb5Q6PZ',
  },
  'Circle Member': {
    id: 'circle',
    level: 2,
    price: '$10',
    priceSub: 'Per Month',
    features: [
      'All Seed Sister access',
      '30-min deep meditation journeys',
      'Weekly sacred circle gatherings',
      '8-part plant medicine series',
      'Priority concierge support',
    ],
    rituals: [
      { e: '🕉️', n: 'Deep Meditation', m: '30 min · Guided' },
      { e: '💎', n: 'Sacred Gatherings', m: 'Weekly Intimacy' },
      { e: '🌿', n: 'Plant Medicine', m: '8-Part Series' },
      { e: '🔮', n: 'Somatic Awakening', m: 'Monthly Sessions' },
    ],
    resources: '300+ resources. Master classes, author interviews, and subscriber-only content. Updated weekly.',
    checkoutUrl: 'https://square.link/u/zJHQWfsu',
  },
  'Sacred Circle': {
    id: 'sacred',
    level: 3,
    price: '$27',
    priceSub: 'Per Month',
    features: [
      'All Circle Member access',
      '60-min transcendence journeys',
      'Monthly 1-on-1 counsel session',
      'Intimate ceremonies (30-person max)',
      '500+ resource Sacred Archive',
    ],
    rituals: [
      { e: '🕉️', n: 'Transcendence', m: '60 min · Rare' },
      { e: '👑', n: 'Inner Ceremonies', m: '30-Person Max' },
      { e: '✨', n: '1-on-1 Counsel', m: 'Monthly' },
      { e: '🌟', n: 'Legacy Alchemy', m: 'Life Design' },
    ],
    resources: '500+ resources. Exclusive interviews, founder-curated collections, and lifetime vault access.',
    checkoutUrl: 'https://square.link/u/yv2dBMch',
  },
  'Founding Sister': {
    id: 'founding',
    level: 4,
    price: '$97',
    priceSub: 'Lifetime · Limited',
    features: [
      'Lifetime all-access pass',
      'VIP annual founder retreat',
      'Inner circle advisory board',
      '20% off all future offerings',
      "Name in Founder's Roll of Honor",
    ],
    rituals: [
      { e: '👑', n: 'All Sacred Access', m: 'Unlimited Forever' },
      { e: '💰', n: 'Founder Perks', m: '20% Off Forever' },
      { e: '🌟', n: 'VIP Retreat', m: 'Annual Included' },
      { e: '🔮', n: 'Advisory Board', m: 'Quarterly Voice' },
    ],
    resources: 'Full lifetime access to every resource, past, present, and future. The complete Sanctuary archive.',
    checkoutUrl: 'https://square.link/u/TgMKqD9y',
  },
};

/* ─── PASSPHRASES (Demo) ─── */
const PASSPHRASES = {
  'seed123': 'Seed Sister',
  'circle456': 'Circle Member',
  'sacred789': 'Sacred Circle',
  'founding999': 'Founding Sister',
};

/* ─── EXPORT ─── */
export { ENV, TIER_DATA, PASSPHRASES, validateConfig };
