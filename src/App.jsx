import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import NoPage from "./pages/NoPage";
import Country from "./pages/Country";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NoPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: ":country",
        element: <Country />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;

  // return (
  //   <BrowserRouter>
  //     <Routes>
  //       <Route path="/" element={<Layout />}>
  //         <Route index element={<Home />} />
  //         <Route path=":country" element={<Country />} />
  //         <Route path="*" element={<NoPage />} />
  //       </Route>
  //     </Routes>
  //   </BrowserRouter>
  // );
}

export default App;
