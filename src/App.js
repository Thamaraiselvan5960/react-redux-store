import { useEffect } from "react";
import "./styles.css";
import { useDispatch } from "react-redux";
import { MockFetchActions } from "./store";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(MockFetchActions.fetchMockData());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
