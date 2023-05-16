import styled, { css, keyframes } from 'styled-components'

export const StyledButton = styled.button`
    background-color : ${props => {
        return props.variant === 'outline' ? "transparent" : "red"
    }};
    outline : none;
    border : 1px solid red;
    color : ${props => props.variant === 'outline' ? 'red' : "white"};
    text-decoration : none;
    
`


export const FancyButton = styled(StyledButton)`
    font-size : 24px;
`

export const SubmitButton = styled(StyledButton).attrs((props) => ({
    type : props.variant 
}))`
    font-size : 18px;
    ${(props) => {
        switch (props.$mode) {
            case 'dark':
                return css`
                    background-color : black;
                    color : white;
                `
            default:
                return css`
                    background-color : blue;
                    color : white;
                `
        }
    }}
`

const rotate = keyframes`
    to {
        transform : rotate(360deg)
    }
`

export const AnimatedLogo = styled.img`
    height : 200px;
`