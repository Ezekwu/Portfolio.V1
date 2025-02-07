import styled from 'styled-components';

export const StyledSkills = styled.section`
  background-color: var(--geryBackground);
  color: var(--primaryBlue);
  padding: 4.5rem 0;

  & > div {
    display: flex;
    gap: 10rem;
    .col-1 {
      .about-text_wrapper {
        display: flex;
        gap: 0.5rem;
        font-size: 2.3rem;
        display: flex;
        overflow: hidden;
        .span-parent {
          overflow: hidden;
          display: flex;
          .span-child {
            font-family: 'Noto Nastaliq Urdu', serif;
          }
        }
      }
    }

    .col-2 {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      column-gap: 1.5rem;
      row-gap: 2.5rem;

      .card {
        text-align: center;

        img {
          width: 50px;
          margin-bottom: 0.8rem;
        }
        p {
          background-color: #bdbdbd14;
          padding: 0.01rem 0.3rem;
          font-size: 0.8rem;
          border-radius: 2px;
          width: 100%;
          cursor: default;
        }
      }

      .card:hover {
        p {
          background-color: var(--primaryBlue);
          color: var(--geryBackground);
          transition: background-color 0.2s ease-in-out 0s;
        }
      }
    }
  }

  @media (max-width: 1250px) {
    & > div {
      gap: 3rem;
      .col-2 {
        .card {
          p {
            padding: 0.01rem 0.1rem;
          }
        }
      }
    }
  }
  @media (max-width: 1000px) {
    & > div {
      flex-direction: column;
      .col-2 {
        .card {
          p {
            padding: 0.01rem 0.1rem;
          }
        }
      }
    }
  }
  @media (max-width: 800px) {
    & > div {
      .col-2 {
        grid-template-columns: repeat(5, 1fr);
        column-gap: 1.2rem;
        row-gap: 1.2rem;
      }
    }
  }
  @media (max-width: 650px) {
    & > div {
      .col-1 {
        .about-text_wrapper {
          font-size: 2rem;
        }
      }
      .col-2 {
        grid-template-columns: repeat(4, 1fr);
        column-gap: 1.2rem;
        row-gap: 1.2rem;
      }
    }
  }
  @media (max-width: 600px) {
    padding: 3rem 0;
    & > div {
      .col-2 {
        grid-template-columns: repeat(3, 1fr);
        column-gap: 1.2rem;
        row-gap: 1.2rem;
      }
    }
  }
  @media (max-width: 400px) {
    & > div {
      .col-2 {
        .card {
          img {
            width: 40px;
          }
        }
      }
    }
  }
  @media (max-width: 375px) {
    & > div {
      .col-2 {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  }
`;
