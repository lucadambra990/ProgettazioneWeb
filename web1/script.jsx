const rootDiv = document.getElementById("root")
const root = ReactDOM.createRoot(rootDiv);
const App = (props) => {

  return (
    <main style={styles.main}>
      <h1>This is the main app</h1>
      {props.children}
    </main>
  );

};
const styles = {
  main: {
    backgroundColor: "blanchedalmond",
    color: "blue",
    border: "5px solid #000",
    padding: "30px",
    borderRadius: "10px"
  },
  ul: {
    listStyleType: "none",
    paddingLeft: "0",
  },
  li: {
    margin: "5px 0",
    padding: "2px 0",
  },
};
root.render(
  <>
    <App>
      <h1>My learning path</h1>
      <h2>Using jSX</h2>
      <ul>
        <li>JAVASCRIPT</li>
        <li>PHP</li>
        <li>HTML</li>
      </ul>
    </App>
  </>
)

