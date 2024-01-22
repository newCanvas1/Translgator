import Navbar from "./Components/Navbar/Navbar";
import About from "./Pages/About/About";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TranslateInput from "./Pages/TranslateInput/TranslateInput";
import { LanguageProvider } from "./context/LanguageContext";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <TranslateInput />,
    },
    { path: "/about", element: <About /> },
  ]);

  return (
    <main>
      <LanguageProvider>
        <Navbar />
        <RouterProvider router={router} />
      </LanguageProvider>
    </main>
  );
}
