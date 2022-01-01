import styles from "../styles/404.module.css";

const customError = () => {
  return (
    <div className={styles.container}>
      <h1>Why are you here?</h1>

      <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
        <img src="https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg" />
      </a>
    </div>
  );
};

export default customError;
