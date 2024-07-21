import { useEffect } from "react";
import "./styles.css";
import { useDispatch } from "react-redux";
import { MockFetchActions } from "./store";
import { Header } from "./Pages/Profile";
import { MyRoutes } from "./routers";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(MockFetchActions.fetchMockData());
  }, [dispatch]);

  return (
    <div className="App">
      <MyRoutes />
    </div>
  );
}
