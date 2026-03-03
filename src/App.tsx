import { Toaster } from "react-hot-toast";
import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import type React from "react";

function App() : React.ReactNode {
  return (
    <>
      <Toaster />
      <AppRoutes />
    </>
  )
}

export default App;
