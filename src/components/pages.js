import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddNewBookForm from "./AddNewBookForm";
import EditBookForm from "./EditBookForm ";
import Dashboard from "./Dashboard";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/add-book" element={<AddNewBookForm />} />
        <Route path="/edit-book" element={<EditBookForm />} />
        <Route path="*" element={() => <p>ERROR</p>} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
