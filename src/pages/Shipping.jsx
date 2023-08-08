import NavBarDark from "src/components/NavBarDark";
import { useNavigate } from "react-router-dom";


const Shipping = () => {
  const navigate = useNavigate();

  return (
    <>
      <NavBarDark />

      <div>
        <button className="btn" onClick={() => navigate(-1)}>
          Go Back
        </button>
      </div>
    </>
  );
};

export default Shipping;
