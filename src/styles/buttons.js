import styled, { css } from 'styled-components'


export const StyledButton = styled.button `

    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    font-size: 0.80rem;
    font-weight: 600;
    padding: 0, 2rem;
    
    ${({buttonType}) => {
        switch(buttonType){
            case "search":
                return css`
                    padding: 0, 2rem;
                    height: 30px;
                    width: 100px;
                    background-color: #27AE60;
                    border: 2px solid #27AE60;
                    color: #FFFFFF;
                    
                    &:hover{
                        background-color: #93D7AF;
                        border: 2px solid #93D7AF;
                    }
                `
            case "buy":
                return css` 
                    padding: 0px 20px;
                    width: 106px;
                    height: 40px;
                    background: #27AE60;
                    border: 2px solid #27AE60;
                    border-radius: 8px;
                    color: #FFFFFF;

                    &:hover{
                        background-color: #93D7AF;
                        border: 2px solid #93D7AF;
                    }
                `
            case "cart_remove":
                return css` 
                    padding: 0px 20px;
                    width: 100%;
                    height: 60px;
                    background: #E0E0E0;
                    border: 2px solid #E0E0E0;
                    font-weight: 600;
                    font-size: 16px;
                    color: #828282;

                    &:hover{
                        background: #828282;                  
                        border: 2px solid #828282;
                        color: #E0E0E0;
                    }
                `
        }
    }}


    


`


