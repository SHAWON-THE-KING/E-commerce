import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from './RootLayout.jsx';
import Contact from './Pages/Contact.jsx';
import About from './Pages/about/About.jsx';
import Login from './Pages/Login.jsx';
import SignUp from './Pages/SignUp.jsx';
import Error from './Pages/Error.jsx';
import Products from './Pages/Products.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: App },
      { path: "contact", Component: Contact },
      { path: "about", Component: About },
      { path: "sign-up", Component: SignUp },
      { path: "Login", Component: Login },
      { path: "Error", Component: Error },
      { path: "Products", Component: Products },

    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
