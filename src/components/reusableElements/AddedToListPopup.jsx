import styles from "../../css-modules/addedToListPopup.module.css";

function AddedToListPopup({ popupText }) {
  return (
    <div className={styles.popupContainer}>
      <p>{popupText}</p>
    </div>
  );
}

export default AddedToListPopup;
