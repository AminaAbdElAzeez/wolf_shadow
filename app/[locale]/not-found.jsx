export default function NotFound() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>404</h1>
      <p style={styles.message}>
        Sorry, the page you are looking for was not found.
      </p>
      <a href="/" style={styles.link}>
        Go back home
      </a>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "10%",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    fontSize: "5rem",
    fontWeight: "bold",
    color: "#ff4444",
  },
  message: {
    fontSize: "1.5rem",
    color: "#555",
  },
  link: {
    marginTop: "20px",
    display: "inline-block",
    fontSize: "1.2rem",
    textDecoration: "none",
    color: "#0070f3",
  },
};
