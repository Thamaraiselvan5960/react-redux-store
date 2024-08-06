import { useEffect } from "react";
import "./styles.css";
import { useDispatch } from "react-redux";
import { MockFetchActions } from "./store";
import { Header } from "./Pages/Profile";
import { MyRoutes } from "./routers";
import { GoogleOAuthProvider } from "@react-oauth/google";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(MockFetchActions.fetchMockData());
  }, [dispatch]);

  return (
    <div className="App">
      <GoogleOAuthProvider clientId="996791026306-0259k42q4ddvqf5o354lutb7a6h3tc96.apps.googleusercontent.com">
        <MyRoutes />

      </GoogleOAuthProvider>
    </div>
  );
}
