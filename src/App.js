
import ParcelDetails from "./components/ParcelDetails";
import RequestFields from "./components/RequestFields";

import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <main>
        <RequestFields />
        <ParcelDetails />
      </main>
    </div>
  );
}

export default App;
