import NavBarDark from "src/components/NavBarDark";
import check from "src/assets/icons/check-mark.svg";


function PaymentSuccessful() {
  return (
    <>
      <NavBarDark />

      <main className="payment-successful">
        <div>
          <h1>Your order was successful</h1>
          <img src={check} alt="payment successful" />
          <p>A confirmation email will be sent shortly</p>
          <button type="button">Ok</button>
        </div>
      </main>
    </>
  );
}

export default PaymentSuccessful;
