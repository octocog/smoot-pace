// 1 smoot = 1.7018 m → 1 kSmoot = 1701.8 m → marathon (42194.988 m) = 24.79433541 kSmoots
export const MARATHON_KSMOOTS = 24.79433541;

export const KSMOOT_COLUMNS = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24,
  MARATHON_KSMOOTS,
];

export function parseHMS(input) {
  if (typeof input !== 'string') return null;
  const trimmed = input.trim();
  if (!trimmed) return null;
  const parts = trimmed.split(':');
  if (parts.length < 1 || parts.length > 3) return null;
  if (parts.some((p) => p === '' || !/^\d+$/.test(p))) return null;
  const nums = parts.map(Number);
  let h = 0, m = 0, s = 0;
  if (nums.length === 3) [h, m, s] = nums;
  else if (nums.length === 2) [m, s] = nums;
  else [s] = nums;
  if (m >= 60 || s >= 60) return null;
  return h * 3600 + m * 60 + s;
}

export function formatHMS(seconds) {
  const total = Math.max(0, Math.round(seconds));
  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;
  return `${h}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

export function formatMS(seconds) {
  const total = Math.max(0, Math.round(seconds));
  const m = Math.floor(total / 60);
  const s = total % 60;
  return `${m}:${String(s).padStart(2, '0')}`;
}

export function splitAt(paceSecPerKSmoot, kSmoots) {
  return Math.round(paceSecPerKSmoot * kSmoots);
}

export function paceFromGoal(goalSeconds) {
  return goalSeconds / MARATHON_KSMOOTS;
}
