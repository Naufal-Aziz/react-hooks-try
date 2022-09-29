import useResources from "../hooks/useResources";

const TitleList = ({ resourceName }) => {
  const titles = useResources(resourceName);

  return (
    <>
      {titles && titles.length ? (
        <ul>
          {titles.map((item) => {
            return <li key={item.id}>{item.title}</li>;
          })}
        </ul>
      ) : (
        <h1>kasep</h1>
      )}
    </>
  );
};

export default TitleList;
