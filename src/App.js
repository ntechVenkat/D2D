import { useDispatch, useSelector } from "react-redux";
import Form from "./Components/Form.js";
import "./Components/Redux.js";
import Result from "./Components/Result.js";

function App() {
  const dispatch = useDispatch();
  const siteName = useSelector((state) => {
    return state.siteReducer.site;
  });
  // console.log(siteName);

  async function fetchData(dispatch, getState) {
    let res = await fetch("https://jsonplaceholder.typicode.com/users/3");
    let data = await res.json();
    // console.log(data);
    dispatch({ type: "addSite", payload: data.website });
  }

  return (
    <div>
      <div>
        <center>
          <h1>Redux App Component</h1>
          <Form />
          <Result />
        </center>
      </div>
      <div>
        <center>
          <b>Site : </b>
          {siteName} <br />
          <button
            className="btn btn-primary"
            onClick={() => {
              dispatch(fetchData);
            }}
          >
            Get Site
          </button>
        </center>
      </div>
    </div>
  );
}

export default App;
