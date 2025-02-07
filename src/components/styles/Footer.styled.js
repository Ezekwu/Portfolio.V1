import styled from 'styled-components';

export const StyledFooter = styled.footer`
  background-color: var(--geryBackground);
  color: var(--primaryBlue);
  padding: 3rem 7rem;

  & > div {
    display: flex;
    justify-content: space-between;
  }
  .col-1 {
    h3 {
      font-size: 2rem;
      color: var(--brightBlue);
      font-family: 'Electrolize', sans-serif;
      font-weight: normal;
      margin-bottom: 2rem;
    }
  }
  .col-2 {
    display: flex;
    gap: 6rem;

    ul {
      list-style-type: none;
      li {
        margin-bottom: 1.2rem;
        a {
          color: var(--primaryBlue);
          text-decoration: none;
          transition: all 0.2s ease-in;
        }
        a:hover {
          color: var(--brightBlue);
        }
      }
    }
  }
  @media (max-width: 900px) {
    padding: 3rem 0rem;
  }
  @media (max-width: 650px) {
    padding: 2rem 0rem;
    & > div {
      flex-direction: column;
      gap: 3rem;
    }
  }
`;
