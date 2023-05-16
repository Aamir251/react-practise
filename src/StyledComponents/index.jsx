import { ThemeProvider, styled } from "styled-components"

import { getFromLS, setToLS } from "./utility/localStorage";
import { useEffect, useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import * as themes from "./Styled/themeSchema.json";
import useTheme from "./hooks/useTheme";
import { GlobalReset, GlobalStyles } from "./Styled/Global.styled";

const Container = styled.div`
  margin: 5px auto 5px auto;
`;


const StyledComponents = () => {
    setToLS('all-themes', themes.default)

    const { currentTheme,  themeLoaded } = useTheme()
    const [ selectedTheme, setSelectedTheme ] = useState(currentTheme)

    useEffect(() => {
        setSelectedTheme(currentTheme)
    },[themeLoaded])


    const allThemes = getFromLS('all-themes')

    return <>
        {
        themeLoaded && <ThemeProvider theme={selectedTheme} >
          <GlobalReset />
          <GlobalStyles />
          <Container>
            <ThemeSwitcher setSelectedTheme={setSelectedTheme} />
            <h1>Theme Builder</h1>
            <p>
              This is a theming system with a Theme Switcher and Theme Builder.
              Do you want to see the source code? 
              <a href="https://github.com/atapas/theme-builder" target="_blank">
                Click here.
              </a>
            </p>
        </Container>
        </ThemeProvider>
      }
    </>
}

export default StyledComponents