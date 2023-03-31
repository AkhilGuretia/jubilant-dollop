import styles from "./Buttons.module.css";
interface props {
  children: string;
  color?: "primary" | "secondary" | "Danger" | "success" | "warning";
  onClick: () => void;
}

const Buttons = ({ children, color = "warning", onClick }: props) => {
  return (
    <div>
      <button
        type="button"
        className={[styles.btn, styles["btn-" + color]].join(" ")}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
};

export default Buttons;
