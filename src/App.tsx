import { useMemo, useState } from 'react';
import { HeaderFilters } from './components/HeaderFilters';
import { NumismaticaCard } from './components/NumismaticaCard';
import { numismaticaData, type NumismaticaItem } from './data';

export default function App() {
  const [filtros, setFiltros] = useState({
    ano: '',
    material: '',
    denominacion: '',
  });

  const filtrados = useMemo(() => {
    return numismaticaData.filter((item) => {
      return (
        (!filtros.ano || item.ano.toString() === filtros.ano) &&
        (!filtros.material || item.material === filtros.material) &&
        (!filtros.denominacion || item.denominacion === filtros.denominacion)
      );
    });
  }, [filtros]);

  const handleVerEscala = (item: NumismaticaItem) => {
    alert(`Escala de valores de ${item.nombre}`);
  };

  return (
    <div style={{ minHeight: '100vh', background: '#f7f7f4' }}>
      <HeaderFilters onFilterChange={setFiltros} />

      <main style={{ maxWidth: 1200, margin: '0 auto', padding: 24 }}>
        <div style={{ display: 'grid', gap: 20, gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
          {filtrados.map((item) => (
            <NumismaticaCard key={item.id} item={item} onVerEscala={handleVerEscala} />
          ))}
        </div>
      </main>
    </div>
  );
}