import { Suspense } from "react";
import { Provider } from "react-redux";

import Loader from "./components/Loader";
import GitHubUsersContainer from "./containers/GitHubUsersContainer";

import "./utils/fontAwesome";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Suspense fallback={<Loader isPageLoader={true} />}>
        <GitHubUsersContainer />
      </Suspense>
    </Provider>
  );
}

export default App;
