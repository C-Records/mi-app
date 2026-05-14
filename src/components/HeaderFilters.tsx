import type { Dispatch, SetStateAction } from 'react';

type Filtros = {
  ano: string;
  material: string;
  denominacion: string;
};

type Props = {
  onFilterChange: Dispatch<SetStateAction<Filtros>>;
};

export function HeaderFilters({ onFilterChange }: Props) {
  return (
    <header
      style={{
        background: '#123a63',
        color: '#fff',
        padding: '20px',
        borderBottom: '4px solid #d4a017',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <h1 style={{ margin: '0 0 16px', fontSize: '28px' }}>Catálogo Numismático</h1>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 12 }}>
          <select
            onChange={(e) =>
              onFilterChange((prev) => ({ ...prev, ano: e.target.value }))
            }
            style={selectStyle}
            defaultValue=""
          >
            <option value="">Año</option>
            <option value="1945">1945</option>
            <option value="1972">1972</option>
            <option value="1990">1990</option>
            <option value="2020">2020</option>
          </select>

          <select
            onChange={(e) =>
              onFilterChange((prev) => ({ ...prev, material: e.target.value }))
            }
            style={selectStyle}
            defaultValue=""
          >
            <option value="">Material</option>
            <option value="Papel algodón">Papel algodón</option>
            <option value="Papel polímero">Papel polímero</option>
            <option value="Plata 999">Plata 999</option>
          </select>

          <select
            onChange={(e) =>
              onFilterChange((prev) => ({ ...prev, denominacion: e.target.value }))
            }
            style={selectStyle}
            defaultValue=""
          >
            <option value="">Denominación</option>
            <option value="50 C$">50 C$</option>
            <option value="100 C$">100 C$</option>
            <option value="500 C$">500 C$</option>
            <option value="1000 C$">1000 C$</option>
          </select>
        </div>
      </div>
    </header>
  );
}

const selectStyle: React.CSSProperties = {
  padding: '12px',
  borderRadius: 8,
  border: '1px solid rgba(255,255,255,0.2)',
  background: '#fff',
  color: '#222',
};