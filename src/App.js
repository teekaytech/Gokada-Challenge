import './App.scss';
import ParcelDetails from './components/ParcelDetails';
import RequestFields from './components/RequestFields';

function App() {
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
