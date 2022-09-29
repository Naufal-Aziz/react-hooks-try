import useResources from "../hooks/useResources";
import { useTheme, useThemeUpdate } from "../contexts/theme-context";

const TitleList = ({ resourceName }) => {
  const titles = useResources(resourceName);
  const darkTheme = useTheme()
  const toggleTheme = useThemeUpdate()
  const theme = {
    backgroundColor: darkTheme ? '#333' : '#CCC',
    color: darkTheme ? '#CCC' : '#333',
    padding: '2rem',
    margin: '2rem'
  }

  return (
    <>
      <button onClick={toggleTheme}>Toggle theme</button>
      <div style={theme}>
        {titles && titles.length ? (
          <ul>
            {titles.map((item) => {
              return <li key={item.id}>{item.title}</li>;
            })}
          </ul>
        ) : (
          <h1>kasep</h1>
        )}
      </div>
    </>
  );
};

export default TitleList;
