import { BrowserRouter, Route, Routes } from "react-router-dom";
import ConfirmationPage from "./components/ConfirmationPage";
import Form from "./components/Form";
import ListPage from "./components/ListPage";
import './index.css';

function App() {
  return (
    <BrowserRouter basename={window.location.pathname || ''}>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Form />} />
          <Route path="/confirmacao" element={<ConfirmationPage />} />
          <Route path="/lista" element={<ListPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
