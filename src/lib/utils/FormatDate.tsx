export default function formatDate(dateString?: string) {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  };

  if (dateString) {
    return new Date(dateString).toLocaleDateString('id-ID', options);
  } 
  
  return new Date().toLocaleDateString('id-ID', options);
  
}