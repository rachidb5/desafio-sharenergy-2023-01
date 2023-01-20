import "./App.css";
import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./routes/Routes";
import Provider from './context/provider'

function App() {
  return (
    <BrowserRouter>
      <Provider>
        <MainRoutes />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
