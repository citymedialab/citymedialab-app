// lib/date.ts
export function formatGreekDate(date: Date = new Date()): string {
  const s = new Intl.DateTimeFormat('el-GR', {
    weekday: 'long',
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(date)

  // Πρώτο γράμμα κεφαλαίο (για πιο “editorial” εμφάνιση)
  return s.charAt(0).toUpperCase() + s.slice(1)
}
