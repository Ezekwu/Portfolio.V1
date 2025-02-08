import styled from 'styled-components';

export const StyledProject = styled.section`
  .project {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0rem;
    color: var(--geryBackground);
    padding: 4rem 0;

    .details {
      .project-name_wrapper {
        display: flex;
        gap: 0.5rem;
        font-size: 2.3rem;
        display: flex;
        overflow: hidden;
        margin-bottom: 1rem;
        .span-parent {
          overflow: hidden;
          display: flex;
          .span-child {
            font-family: 'Noto Nastaliq Urdu', serif;
          }
        }
      }
      .description{
        max-width: 60%;
        margin-bottom: 1rem;
      }
      .duration {
        margin-bottom: 0.5rem;
        color: #606676;
      }

      .tech-stack {
        display: flex;
        gap: 0.4rem;
        margin-bottom: 2em;
      }

      .links {
        display: flex;
        gap: 1rem;
        margin-bottom: 2.5rem;
        a {
          text-decoration: none;
          color: var(--geryBackground);
          transition: all 0.2s ease-in;
        }
        a:hover {
          color: #606676;
        }
      }
      .View-more {
        color: var(--geryBackground);
        text-decoration: none;
        border: 1px solid var(--geryBackground);
        padding: 0.9rem 1.2rem;
        position: relative;
        z-index: 34;
      }
      .View-more:hover {
        color: var(--primaryBlue);
      }

      .View-more::after {
        position: absolute;
        z-index: -1;
        content: '';
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transform: scaleX(0);
        background-color: var(--geryBackground);
        transform-origin: right;
        transition: transform 0.2s ease-out 0s;
      }

      .View-more:hover::after {
        transform: scaleX(1);
        transform-origin: left;
      }
    }

    .thumbnail {
      padding: 2rem;
      background-color: #c6dfdf;
      width: 60%;

      img {
        border: 1px solid var(--geryBackground);
        border-radius: 5px;
        width: 100%;
        height: 250px;
        object-fit: cover;
      }
    }
  }
  .border {
    height: 1px;
    width: 100%;
    background-color: #1d212b3d;
  }

  @media (max-width: 1000px) {
    .project {
      gap: 2rem;

      .thumbnail {
        padding: 3rem;
      }
    }
  }

  @media (max-width: 950px) {
    .project {
      gap: 3rem;
      flex-direction: column-reverse;
      .thumbnail {
        width: 100%;
      }
      .details {
        width: 100%;
      }
    }
  }
  @media (max-width: 800px) {
    .project {
      .thumbnail {
        padding: 2.5rem;
      }
      .details {
        .tech-stack {
          margin-bottom: 2rem;
        }
      }
    }
  }
  @media (max-width: 600px) {
    .project {
      padding: 3rem 0;
      .thumbnail {
        padding: 5%;
      }
      .details {
        font-size: 1rem;
        .project-name_wrapper {
          font-size: 1.8rem;
          margin-bottom: 0.6rem;
        }
        .tech-stack {
          margin-bottom: 1.5rem;
        }
        .view-more {
          padding: 0.6em 1rem;
        }
      }
    }
  }
`;
