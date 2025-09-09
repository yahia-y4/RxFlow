
import react from "react";
import "./successModel.css";

export default function SuccessModel() {
  return (
    <div className="success-model">
      <div className="success-model-content">
        <h2>Success</h2>
        <p>Your order has been placed successfully</p>
      </div>
      <button>اغلاق</button>
    </div>
  );
}