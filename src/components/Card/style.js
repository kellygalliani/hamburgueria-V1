import styled from 'styled-components'

const StyledLiCard =  styled.li`
    min-width: 298px;
    width: 298px;
    height: fit-content;
    background: #FFFFFF;
    border: 2px solid #E0E0E0;
    border-radius: 5px;

    .div_img{
        width: 100%;
        height: 200px;
        background-color: #F5F5F5;;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    img{
        max-width:100%;
    }
    .div_content{
        padding: 20px;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    h2{
        font-weight: 700;
        font-size: 18px;
    }
    span{
        font-weight: 400;
        font-size: 12px;
        color: #828282;
    }
    p{
        font-weight: 600;
        font-size: 14px;
        color: #27AE60;
    }

    

`

export default StyledLiCard