const Esewa = ({ amount }) => {
  const handlePayment = () => {
    const pid = Date.now().toString(); // unique order id

    const form = document.createElement("form");
    form.method = "POST";
    form.action = "https://rc-epay.esewa.com.np/api/epay/main";

    const data = {
      amt: amount,
      psc: 0,
      pdc: 0,
      txAmt: 0,
      tAmt: amount,
      pid: pid,
      scd: "EPAYTEST",
      su: `http://localhost:3000/esewa/verify?amt=${amount}&pid=${pid}&rid=PLACEHOLDER`,
      fu: `http://localhost:3000/esewa/fail`,
    };

    for (const key in data) {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = key;
      input.value = data[key];
      form.appendChild(input);
    }

    document.body.appendChild(form);
    form.submit();
  };

  return (
    <button
      onClick={handlePayment}
      className="bg-green-600 text-white px-4 py-2 rounded"
    >
      Pay with eSewa
    </button>
  );
};

export default Esewa;
