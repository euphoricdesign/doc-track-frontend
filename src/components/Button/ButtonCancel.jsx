import "./ButtonCancel.css";

export const ButtonCancel = ({ text, confirmCancel, id, status }) => {
  return (
    <button
      onClick={() => confirmCancel(id)}
      className={status === "cancelled" ? "button-sm disabled" : "button-sm"}
    >
      {text}
    </button>
  );
};
