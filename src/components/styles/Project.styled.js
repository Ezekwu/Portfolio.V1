import styled from "styled-components";

export const StyledProject = styled.section`

.project{
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 3rem;
        color: var(--geryBackground);
        padding: 4rem 0;

        .details{
            .project-name_wrapper{
                    display: flex;
                    gap: .5rem;
                    font-size: 2.3rem;
                    display: flex;
                    overflow: hidden;
                    margin-bottom: 1rem;
                    .span-parent{
                        overflow: hidden;
                        display: flex;
                        .span-child{
                            font-family: 'Noto Nastaliq Urdu', serif;
                        }
                    }
            }
            .duration{
                margin-bottom: .5rem;
            }
            .tech-stack{
                display: flex;
                gap: .4rem;
                margin-bottom: 4em;
                
            }

            .links{
                display: flex;
                gap: 1rem;
                margin-bottom: 2.5rem;
                a{
                    text-decoration: none;
                    color: var(--geryBackground);
                    transition: all .2s ease-in;
                }
                a:hover{
                    color: #1d212b6b;
                }
            }
            .View-more{
                color: var(--geryBackground);
                text-decoration: none;
                border: 1px solid var(--geryBackground);
                padding: .9rem 1.2rem;
                position: relative;
                z-index: 34;
            }
            .View-more:hover{
                color: var(--primaryBlue);

            }
            
            .View-more::after{
                position: absolute;
                z-index:-1;
                content: "";
                bottom: 0;
                left: 0;
                width: 100%;
                height: 100%;
                transform: scaleX(0);
                background-color: var(--geryBackground);
                transform-origin: right;
                transition: transform 0.2s ease-out 0s;

            }
            
            .View-more:hover::after{
                transform: scaleX(1);
                transform-origin: left;
                
            }
            
        }
        
        .thumbnail{
            padding:  4rem;
            background-color: #c6dfdf;
            width: 60%;

            img{
                border: 1px solid var(--geryBackground);
                border-radius: 5px;
            }
        }
    }
    .border{
        height: 1px;
        width: 100%;
        background-color: #1d212b3d;
    }

    @media(max-width:1000px){
        .project{
            gap: 2rem;

            .thumbnail{
                padding: 3rem;
            }
        }
    }

    @media(max-width:950px){
        .project{
            gap: 3rem;
            flex-direction: column-reverse;
            .thumbnail{
                width: 100%;
            }
            .details{
                width: 100%;
            }
        }
    }
    @media(max-width:800px){
        .project{
            .thumbnail{
                padding: 2.5rem;
            }
            .details{
                .tech-stack{
                    margin-bottom: 2rem;
                }
            }
        }
    }
    @media(max-width:600px){
        .project{
            padding: 3rem 0;
            .thumbnail{
                padding: 5%;
            }
            .details{
                font-size: 1rem;
                .project-name_wrapper{
                    font-size: 2rem;
                    margin-bottom: .6rem;
                }
                .tech-stack{
                    margin-bottom: 1.5rem;
                }
                .view-more{
                    padding: .6em 1rem;
                }
            }
        }
    }
`