import styled from 'styled-components';

export const StyledNavbar = styled.nav`
    color: var(--primaryBlue);
    padding-top: 2.5rem;
    padding-bottom:2.5rem;
    position: relative;
    z-index: 5;
    
    .container{
        display: flex;
        justify-content: space-between;
        align-items: center;

        .logo{
            font-size: 2rem;
            color: var(--brightBlue);
            font-family: 'Electrolize', sans-serif;
            }

        a{
            text-decoration: none;
            color: var(--primaryBlue);
        }
        .links-container{
            display: flex;
            align-items: center;
            gap:3rem ;
            ul{
                list-style-type: none;
                display: flex;
                align-items: center;
                gap: 3rem;
                font-size: 1.1rem;
                font-weight: 300;
                li a{
                    position: relative;
                }

                li a::after{
                    content: '';
                    margin: 0 auto;
                    position: absolute;
                    transition: all 0.2s ease-out 0s;
                    width: 0%;
                    left: 0;
                    right: 0;
                    bottom: -4px;
                    height: 1px;
                    background: var(--primaryBlue);
                    
                }
                li:hover a::after{
                    width: 100%;
                }
            }

            .resume{
                background-color: var(--brightBlue);
                padding:.9rem 1.3rem;
                font-size: 1.1rem;                
                color: var(--geryBackground);
            }
        }
        
    }
`