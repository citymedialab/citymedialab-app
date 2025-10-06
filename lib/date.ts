export function formatGreekDate(date = new Date()): string {
  const opts: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'Europe/Athens',
  }
  const s = new Intl.DateTimeFormat('el-GR', opts).format(date)
  return s.charAt(0).toUpperCase() + s.slice(1)
}
