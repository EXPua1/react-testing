import style from "./Container.module.css";

const Container = ({ title, children }) => {
  return (
    <div className={style.container}>
      {title && <h2>{title}</h2>}
      {children}
    </div>
  );
};

export default Container;
