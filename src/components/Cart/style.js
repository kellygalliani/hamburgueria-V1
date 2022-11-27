import styled from 'styled-components'

const StyledAside = styled.aside `

    min-width: 17.125rem;
    width: 100%;
    
    .aside__header{
      width: 100%;
      height: 65px;
      background: #27AE60;
      border-radius: 5px 5px 0px 0px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 700;
      font-size: 18px;
      color: #FFFF;
    }
    .aside__emptyCart{
      width: 100%;
      height: 158px;
      background: #F5F5F5;
      border-radius: 0px 0px 5px 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 20px;
    }
    .emptyCart__span{
      color: #828282;
      font-weight: 400;
      font-size: 14px;
    }
    .aside__ul{
      width: 100%;
      background: #F5F5F5;
      border-radius: 0px 0px 5px 5px;
      min-height: 158px;
      max-height: 320px;
      overflow: auto;
      padding: 20px 10px;
      display: flex;
      flex-direction: column;
      gap: 21px;
    }
    .aside__divTotal{
      width: 100%;
      border-top: 2px solid  #E0E0E0;
      background: #F5F5F5;
      border-radius: 0px 0px 5px 5px;  
      padding: 20px 10px;
      display: flex;
      flex-direction: column;
      gap: 40px;
    }
    .divTotal_divContent{
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }
    .divTotal_divContent > h4{
      font-weight: 600;
      font-size: 14px;
      color: #333333;
    }
    .divTotal_divContent > p{
      font-weight: 600;
      font-size: 14px;
      color: #828282;
    }

    @media (min-width: 900px) {
      max-width: 416px;
    }
  `

export default StyledAside