import { useEffect, useState } from "react";
import useTheme from "../hooks/useTheme";
import { getFromLS } from "../utility/localStorage"
import { styled } from "styled-components";

const ThemeSwitcher = ({ setSelectedTheme }) => {
    const themesFromStore = getFromLS('all-themes');
    const [data, setData] = useState(themesFromStore.data);
    const [themes, setThemes] = useState([]);
    const {setTheme} = useTheme();
    useEffect(() => {
        setThemes(Object.keys(data));
    }, [data]);

    const themeSwitcher = (selectedTheme) => {
      console.log("selected theme", selectedTheme)
      setTheme(selectedTheme)
      setSelectedTheme(selectedTheme)
      
    }

    return themes.length > 0 && themes.map((theme) => {
        return <ThemeCard themeSwitcher={themeSwitcher} key={theme} theme={data[theme]} setTheme={setTheme} />
    })
   
      
    
}

export default ThemeSwitcher;

const ThemeCard = (props) => {
  const handleClick = () => {
    props.setTheme(props.theme)
    props.themeSwitcher(props.theme)
  }
    return(
      <ThemedButton onClick={handleClick} theme={props.theme}>
        {props.theme.name}
        
      </ThemedButton>
    )
}


const ThemedButton =  styled.button`
    background-color : ${(props) => props.theme.colors.button.background};
    color : ${(props) => props.theme.colors.button.text};
`

