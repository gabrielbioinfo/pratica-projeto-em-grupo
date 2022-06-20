

import { createContext, useEffect, useState } from "react";
import getVinteFlixData from "../data/service";

export const VinteFlixContext = createContext();

export default function VinteflixContextProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [resources, setResources] = useState([]);
  const [selectedResource, selectResource] = useState();
  
  useEffect(()=>{
    (async () => {
      const data = await getVinteFlixData();
      setResources(data);
      setLoading(false);
    })();
  }, []);

  const myContext = {
    loading,
    resources,
    selectedResource,
    selectResource
  };

  return <VinteFlixContext.Provider value={myContext}>
    {children}
  </VinteFlixContext.Provider>;
}