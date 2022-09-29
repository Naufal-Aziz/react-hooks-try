import axios from "axios";
import { useEffect, useState, useCallback } from "react";

const useResources = (resourceName) => {
    const [resources, setResources] = useState([]);
  
    const getResource = useCallback(async () => {
      let res = await axios.get(
        `https://jsonplaceholder.typicode.com/${resourceName}`
      );
      setResources(res.data);
    }, [resourceName]);
  
    useEffect(() => {
      getResource();
    }, [getResource]);
  
    return resources;
  };

  export default useResources