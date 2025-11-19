import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// Pages
import DashboardPage from "../src/pages/DashboardPage";
import TransactionsPage from "../src/pages/TransactionsPage";
import BudgetsPage from "../src/pages/BudgetsPage";
import GoalsPage from "../src/pages/GoalsPage";
import CategoriesPage from "../src/pages/CategoriesPage";
import AIAssistantPage from "../src/pages/AIAssistantPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Navigate to="/dashboard" replace />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="transactions" element={<TransactionsPage />} />
        <Route path="budgets" element={<BudgetsPage />} />
        <Route path="goals" element={<GoalsPage />} />
        <Route path="categories" element={<CategoriesPage />} />
        <Route path="ai-assistant" element={<AIAssistantPage />} />
      </Routes>
    </Router>
  );
}

export default App;
