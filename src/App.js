import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Show from "./componenetes/Show";
import Details from "./componenetes/Details";
import Nav from "./componenetes/nav"

const router = createBrowserRouter([{
  path: "/",
  element: <Show /> 
},
{
  path: "products/:id",
  element: <Details />
}
])

function App() {
  return (
   <>
  <Nav/>
  <h1 className="text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-4xl text-center">React Query</h1>
  <RouterProvider router={router}/>
   </>
  );
}

export default App;
