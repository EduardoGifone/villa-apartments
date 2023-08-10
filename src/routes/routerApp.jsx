import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import VillaGrande from "@/pages/VillaGrande";
import VillaMini from "@/pages/VillaMini";
import Recomendaciones from "@/pages/Recomendaciones";

const router = createBrowserRouter([
  {
    path: "/villaGrande",
    element: <VillaGrande />,
  },
  {
    path: "/villaMini",
    element: <VillaMini />,
  },
  {
    path: "/Recomendaciones",
    element: <Recomendaciones />,
  },

  {
    path: "*",
    element: <h1>Error</h1>
  }
]);

export default router;
