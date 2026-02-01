import { Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";

function App() {
  return (
    <div className="cursor-[url(public/paw-print.png),pointer]">
      <Toaster position="top-right" richColors />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </div>
  );
}

export default App;
