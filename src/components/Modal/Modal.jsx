import css from "./Modal.module.css";

const Modal = ({ toggleModal }) => {
  return (
    <div className={css.backdrop}>
      <div className={css.modal}>
        <button onClick={toggleModal} type="button" className={css.closeBtn}>
          ❎
        </button>
        <div className={css.modal_img}>
          <img src="/vlad.jpg" alt="" />

          <p>Плати за курс!</p>
          <button className={css.btn_pay}>Жду бабки</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
