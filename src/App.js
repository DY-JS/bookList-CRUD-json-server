import { BooksProvider } from "./components/BooksContext";
import Dashboard from "./components/Dashboard";
import AppRouter from "./components/pages";
import "./App.css";

function App() {
  return (
    <BooksProvider>
      <div className="App">
        <AppRouter />
      </div>
    </BooksProvider>
  );
}

export default App;
