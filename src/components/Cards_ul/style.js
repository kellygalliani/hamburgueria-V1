import styled from 'styled-components'

const StyledUlCards = styled.ul `
    display: flex;
    gap: 20px;
    height: fit-content;
    overflow-x: scroll;
    @media (max-width:450px){
        
    }
    @media (min-width:900px) {
        gap: 20px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        overflow: hidden;
    }
    @media (min-width: 1200px){
        grid-template-columns: repeat(3, 1fr);
        
    }
`

export default StyledUlCards