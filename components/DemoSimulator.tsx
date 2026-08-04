"use client";

import { useMemo, useState } from "react";

const pln = new Intl.NumberFormat("pl-PL", { style: "currency", currency: "PLN", maximumFractionDigits: 0 });

export function DemoSimulator() {
  const [revenue, setRevenue] = useState(60000);
  const [margin, setMargin] = useState(48);
  const [fixed, setFixed] = useState(23000);
  const [cash, setCash] = useState(70000);

  const result = useMemo(() => {
    const gross = revenue * margin / 100;
    const operating = gross - fixed;
    const runway = operating >= 0 ? null : cash / Math.abs(operating || 1);
    return { gross, operating, runway };
  }, [revenue, margin, fixed, cash]);

  return (
    <div className="demoShell">
      <div className="demoSidebar">
        <span className="demoBadge">DANE DEMONSTRACYJNE</span>
        <h3>Symulator kondycji firmy</h3>
        <label>Przychód miesięczny <b>{pln.format(revenue)}</b>
          <input type="range" min="10000" max="200000" step="5000" value={revenue} onChange={e => setRevenue(Number(e.target.value))} />
        </label>
        <label>Marża brutto <b>{margin}%</b>
          <input type="range" min="10" max="80" value={margin} onChange={e => setMargin(Number(e.target.value))} />
        </label>
        <label>Koszty stałe <b>{pln.format(fixed)}</b>
          <input type="range" min="5000" max="100000" step="2500" value={fixed} onChange={e => setFixed(Number(e.target.value))} />
        </label>
        <label>Gotówka <b>{pln.format(cash)}</b>
          <input type="range" min="5000" max="300000" step="5000" value={cash} onChange={e => setCash(Number(e.target.value))} />
        </label>
      </div>
      <div className="demoContent">
        <div className="demoTopbar"><span>Fintegrade Twin</span><span className="statusDot">Dane aktualne</span></div>
        <div className="metricGrid">
          <article><span>Marża brutto</span><strong>{pln.format(result.gross)}</strong><small>{margin}% przychodu</small></article>
          <article><span>Wynik operacyjny</span><strong>{pln.format(result.operating)}</strong><small>{result.operating >= 0 ? "firma generuje nadwyżkę" : "miesięczny ubytek gotówki"}</small></article>
          <article><span>Runway</span><strong>{result.runway === null ? "stabilny" : `${result.runway.toFixed(1)} mies.`}</strong><small>{result.runway === null ? "brak spalania gotówki" : "przy obecnym tempie"}</small></article>
        </div>
        <div className="insightCard">
          <div className="aiOrb">AI</div>
          <div>
            <span className="eyebrow">Najważniejsza rekomendacja</span>
            <h3>{result.operating >= 0 ? "Zabezpiecz nadwyżkę i przetestuj wzrost" : "Najpierw zatrzymaj ubytek gotówki"}</h3>
            <p>{result.operating >= 0
              ? `Przy obecnych parametrach firma generuje około ${pln.format(result.operating)} miesięcznie. Najbezpieczniejszy kolejny krok to test sprzedażowy bez zwiększania kosztów stałych.`
              : `Brakuje około ${pln.format(Math.abs(result.operating))} miesięcznie. Największą dźwignią jest poprawa marży lub redukcja kosztów stałych przed dalszym skalowaniem.`}</p>
          </div>
        </div>
        <div className="decisionList">
          <div><b>1</b><span><strong>Sprawdź próg rentowności</strong><small>{pln.format(fixed / (margin / 100))} przychodu miesięcznie</small></span></div>
          <div><b>2</b><span><strong>Ustal bufor gotówki</strong><small>minimum 3 miesiące kosztów stałych: {pln.format(fixed * 3)}</small></span></div>
          <div><b>3</b><span><strong>Przetestuj scenariusz</strong><small>+10% przychodu bez wzrostu kosztów stałych</small></span></div>
        </div>
      </div>
    </div>
  );
}
