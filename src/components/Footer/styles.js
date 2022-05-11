import styled from "styled-components";

const FooterStyled = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: fit-content;
  align-items: center;
  background-color: var(--grey-0);

  .footer {
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    img {
      width: 75px;
      height: 75px;
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
      margin-right: 5px;
    }
    section {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-left: 5px;

      a {
        color: var(--yellow-1);
        font-weight: 700;
        text-decoration: underline;
      }
    }
  }
`;
export default FooterStyled;