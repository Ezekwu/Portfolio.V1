import styled from 'styled-components';

export const StyledNavbar = styled.nav`
    .main-nav{
        color: var(--primaryBlue);
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 5;
        padding-top: 2.5rem;
        padding-bottom:2.5rem;
        transition: all .2s ease-in;
        .container {
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
            gap:3rem;
            background-color: var(--geryBackground);
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
                position: relative;
            }
            .resume::after{
                position: absolute;
                content: "";
                bottom: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.2);
                transform: scaleX(0);
                transform-origin: right;
                transition: transform 0.2s ease-out 0s;

            }
            .resume:hover::after{
                transform: scaleX(1);
                transform-origin: left;
            }
        }
        .toggle-menu{
            display: none;
            cursor: pointer;
            i{
                font-size: 23px;
                transition: all .3s ease-in-out;
            }
        }
    }
    }
    .main-nav.active{
        background-color: var(--primaryBlue);
        color: var(--geryBackground);
        border-bottom: 1px solid #1d212b42;
        padding-top: 1.1rem;
        padding-bottom:1.1rem;
        .container{
            .logo{
                color: var(--geryBackground);
            }
            a{
                color: var(--geryBackground);
            }
            .links-container{
                background-color: var(--primaryBlue);
            ul{
                li a::after{
                    background: var(--geryBackground);
                }
            }

            .resume{
                background-color: var(--geryBackground);              
                color: var(--brightBlue);
            }
            .resume::after{
                background-color: rgba(100, 100, 100, 0.3);

            }
            .resume:hover::after{
                transform: scaleX(1);
                transform-origin: left;
            }
        }
        }
        
    }
    
    .main-nav.active-dark{
        background-color: var(--geryBackground);
        border-bottom: 1px solid #52f2f21c;
        padding-top: 1.1rem;
        padding-bottom:1.1rem;
    }
    @media(max-width:850px) {
        .main-nav{
            .container{
                .links-container{
                    justify-content: center;
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100vh;
                    transform: translateX(-100%);
                    transition: all .3s ease-in-out;
                    .links{
                        flex-direction: column;
                        li{
                            font-weight: 500;
                            font-size: 1.3rem;
                        }
                    }
                }
                .toggle-menu{
                    display: block;
                    z-index: 3;
                }

                .links-container.show-menu{
                    transform: translateX(0%);
                }
            }
        }
    }
    @media(max-width:700px) {
        .main-nav{
            padding-top: 2rem;
            padding-bottom: 2rem;
            .container{
                .logo{
                    font-size: 1.7rem;
                }
                .toggle-menu{
                    i{
                        font-size: 20px;
                    }
                }
            }
        }
    }
    @media(max-width:550px) {
        .main-nav{
            padding-top: 1.8rem;
            padding-bottom: 1.8rem;
            .container{
                .logo{
                    font-size: 1.5rem;
                }
                .toggle-menu{
                    i{
                        font-size: 18px;
                    }
                }
            }
        }
    }
`