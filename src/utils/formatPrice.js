export default function formatPrice(value) {
    if (!Number(value)) {
        return '';
    }
  
    const amount = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  
    return `${amount}`;
}