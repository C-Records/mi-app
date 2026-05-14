import type { NumismaticaItem } from '../data';

type Props = {
  item: NumismaticaItem;
  onVerEscala: (item: NumismaticaItem) => void;
};

export function NumismaticaCard({ item, onVerEscala }: Props) {
  return (
    <article
      style={{
        background: '#fff',
        borderRadius: 16,
        overflow: 'hidden',
        boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
        border: '1px solid #e8e8e8',
      }}
    >
      <div style={{ height: 180, background: '#f2f2f2' }}>
        <img
          src={item.imagen}
          alt={item.nombre}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>

      <div style={{ padding: 16 }}>
        <h3 style={{ margin: '0 0 8px', color: '#123a63' }}>{item.nombre}</h3>
        <p style={{ margin: '0 0 6px' }}><strong>Año:</strong> {item.ano}</p>
        <p style={{ margin: '0 0 6px' }}><strong>Material:</strong> {item.material}</p>
        <p style={{ margin: '0 0 12px' }}><strong>Denominación:</strong> {item.denominacion}</p>

        <button
          onClick={() => onVerEscala(item)}
          style={{
            width: '100%',
            background: '#d4a017',
            color: '#fff',
            border: 'none',
            borderRadius: 10,
            padding: '12px 14px',
            fontWeight: 700,
            cursor: 'pointer',
          }}
        >
          Escala de valores
        </button>
      </div>
    </article>
  );
}