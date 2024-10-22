export default function FormatDate(d?: string) {
  const date = d ? new Date(d) : new Date();

  const dayName = days[date.getDay()];
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${dayName}, ${day} ${month} ${year}`;
}

const days = [ "Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu",];
const months = [ "Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember",];