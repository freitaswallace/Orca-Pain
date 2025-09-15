import React from 'react';
import { Card } from '../../Components/Card';
import { DashboardPage } from '../DashboardPage';
import { px } from '../../../utils/px';

// Adicione aqui todos os scripts do Pain Hub que você deseja incluir.
// Exemplo de estrutura:
const scripts = [
  { name: 'Script 1', action: () => { /* lógica do Script 1 */ } },
  { name: 'Script 2', action: () => { /* lógica do Script 2 */ } },
  { name: 'ESP NOMES', action: () => { /* lógica do ESP NOMES */ } },
  // Adicione outros scripts conforme necessário
];

export function ScriptsHub({ theme }) {
  return (
    <Card
      index={4}
      page={DashboardPage.Home}
      theme={theme}
      size={px(326, 416)}
      // Ajuste a posição conforme necessário para ficar ao lado do Friend Activity
      position={new UDim2(0, 710, 1, 0)}
      title="Scripts Hub"
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        {scripts.map((script, idx) => (
          <button
            key={idx}
            onClick={script.action}
            style={{
              marginBottom: 8,
              padding: "10px",
              fontSize: "16px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              background: theme?.backgroundSecondary || "#f4f4f4",
              color: theme?.textPrimary || "#333",
              cursor: "pointer"
            }}
          >
            {script.name}
          </button>
        ))}
      </div>
    </Card>
  );
}
