import axios from "axios";
import { useEffect, useState } from "react";

const ResourceList = ({resourceName}) => {
  const [theList, setTheList] = useState([]);

  const getResource = async () => {
    let res = await axios.get(
      `https://jsonplaceholder.typicode.com/${resourceName}`
    );
    setTheList(res.data);
  };

  useEffect(() => {
    getResource();
  }, [resourceName]);

  return (
    <>
      {theList && theList.length? (
        <ul>
        {theList.map(item => {
           return <li key={item.id}>{item.title}</li>
        })}
      </ul>
      ) : (
        <h1>kasep</h1>
      )}
    </>
  );
};

export default ResourceList;
