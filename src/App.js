import Navbar from "./Components/Navbar/Navbar";
import About from "./Pages/About/About";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TranslateInput from "./Pages/TranslateInput/TranslateInput";
import { LanguageProvider } from "./context/LanguageContext";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import Contact from "./Pages/Contact/Contact";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      errorElement: <ErrorPage />,
      children: [
        { path: "/", element: <TranslateInput /> },
        { path: "/about", element: <About /> },
        { path: "/contact", element: <Contact /> },
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
