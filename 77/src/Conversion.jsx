function Conversion({ amount, from, to, rate, date }) {
  const convertedAmount = Number(amount || 0) * rate;

  return (
    <section className="result" aria-live="polite">
      <h2>
        {Number(convertedAmount).toFixed(2)} {to}
      </h2>
      <p>
        {amount || 0} {from} = {convertedAmount.toFixed(2)} {to}
      </p>
      <p>
        1 {from} = {rate} {to}
      </p>
      <p className="date">
        Rates as of: {date ?? "not needed for the same currency"}
      </p>
    </section>
  );
}
export default Conversion;