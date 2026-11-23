import { useState } from 'react'

import './App.css'
import Header from './Header'
import NoConverstion from './NoConversion'
import Conversion from './Conversion'

function App() {

  return (
    <>
    <Header/>
    <NoConverstion/>
    <Conversion/>

    </>
    );
}
function App(){
  const [currencies, setCurrencies] = useState([]);
  const [amount, setAmount] = useState("1");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [rateData, setRateData] = useState(null);
  const [loadingCurrencies, setLoadingCurrencies] = useState(true);
  const [loadingRate, setLoadingRate] = useState(false);
  const [error, setError] = useState("");

  // Load the currency list once when the app mounts.
  useEffect(() => {
    const controller = new AbortController();
    let ignore = false;

    async function loadCurrencies() {
      try {
        const response = await fetch(
          "https://api.frankfurter.dev/v1/currencies",
          { signal: controller.signal },
        );

        if (!response.ok) {
          throw new Error("Could not load the currency list.");
        }

        const data = await response.json();

        if (!ignore) {
          setCurrencies(Object.entries(data));
        }
      } catch (err) {
        if (!ignore && err.name !== "AbortError") {
          setError(err.message || "Something went wrong loading currencies.");
        }
      } finally {
        if (!ignore) {
          setLoadingCurrencies(false);
        }
      }
    }

    loadCurrencies();

    return () => {
      ignore = true;
      controller.abort();
    };
  }, []);

  // Load a new rate when either currency changes—not when the amount changes.
  useEffect(() => {
    const controller = new AbortController();
    let ignore = false;

    setRateData(null);
    setError("");

    if (!from || !to) {
      setLoadingRate(false);
      return () => {
        ignore = true;
        controller.abort();
      };
    }

    // No API request is needed to convert a currency to itself.
    if (from === to) {
      setRateData({ rate: 1, date: null });
      setLoadingRate(false);
      return () => {
        ignore = true;
        controller.abort();
      };
    }

    async function loadRate() {
      setLoadingRate(true);

      try {
        const url = `https://api.frankfurter.dev/v1/latest?base=${from}&symbols=${to}`;
        const response = await fetch(url, { signal: controller.signal });

        if (!response.ok) {
          throw new Error("Could not load the exchange rate.");
        }

        const data = await response.json();
        const rate = data.rates?.[to];

        if (typeof rate !== "number") {
          throw new Error("The API did not return a rate for that currency pair.");
        }

        if (!ignore) {
          setRateData({ rate, date: data.date });
        }
      } catch (err) {
        if (!ignore && err.name !== "AbortError") {
          setError(err.message || "Something went wrong loading the exchange rate.");
        }
      } finally {
        if (!ignore) {
          setLoadingRate(false);
        }
      }
    }

    loadRate();

    return () => {
      ignore = true;
      controller.abort();
    };
  }, [from, to]);

  function swapCurrencies() {
    setFrom(to);
    setTo(from);
  }

  return (
    <main className="app">
      <Header />

      <div className="converter">
        <label>
          Amount
          <input
            type="number"
            min="0"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
          />
        </label>

        <div className="currency-row">
          <label>
            From
            <select
              value={from}
              onChange={(event) => setFrom(event.target.value)}
              disabled={loadingCurrencies}
            >
              <option value="" disabled hidden>
                from
              </option>
              {currencies.map(([code, name]) => (
                <option key={code} value={code}>
                  {code} - {name}
                </option>
              ))}
            </select>
          </label>

          <button
            className="swap-button"
            type="button"
            onClick={swapCurrencies}
            aria-label="Swap currencies"
            disabled={!from || !to}
          >
            ⇄
          </button>

          <label>
            To
            <select
              value={to}
              onChange={(event) => setTo(event.target.value)}
              disabled={loadingCurrencies}
            >
              <option value="" disabled hidden>
                to
              </option>
              {currencies.map(([code, name]) => (
                <option key={code} value={code}>
                  {code} - {name}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>

      {loadingCurrencies && <p className="message">Loading currencies…</p>}
      {loadingRate && <p className="message">Loading exchange rate…</p>}
      {error && <p className="error">{error}</p>}

      {!loadingRate && !error && rateData && from && to ? (
        <Conversion
          amount={amount}
          from={from}
          to={to}
          rate={rateData.rate}
          date={rateData.date}
        />
      ) : (
        !loadingRate && !error && <NoConversion />
      )}
    </main>
  );
}


export default App
