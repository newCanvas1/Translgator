import Navbar from "./Components/Navbar/Navbar";
import About from "./Pages/About/About";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import TranslateInput from "./Pages/TranslateInput/TranslateInput";
import { LanguageProvider } from "./context/LanguageContext";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      errorElement: <ErrorPage />,
      children: [
        { path: "/", element: <TranslateInput /> },
        { path: "/about", element: <About /> },
      ],
    },
  ]);

  return (
    <main>
      <LanguageProvider>
        <RouterProvider router={router} />
      </LanguageProvider>
    </main>
  );
}
