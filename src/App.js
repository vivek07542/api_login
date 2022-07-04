import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import Routing from './project/pages/routes';
import ErrorBoundary from "./common/components/ErrorBoundary/ErrorBoundary";
function App() {
  return (
    <div className="App">
      <ErrorBoundary>
          <Routing/>
      </ErrorBoundary>
    </div>
  );
}

export default App;
