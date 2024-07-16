
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Root from "../pages/Root";
import ProductDetail from "../components/ProductDetail";

export const ROUTES = [
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "product/:id",
        element: <ProductDetail />,
      },
    ],
  },
];
