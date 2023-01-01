import styled from "styled-components";

export const StyledProjects = styled.section`
    background-color: var(--primaryBlue);
    padding: 4.5rem 0;
    color: var(--geryBackground);
    
    .title{
        width: 190px;
        margin: 0 auto 4rem;

        .about-text_wrapper{
            display: flex;
            gap: .5rem;
            font-size: 2.3rem;
            display: flex;
            overflow: hidden;
            
            margin-bottom: .2rem;
            .span-parent{
                overflow: hidden;
                display: flex;
                .span-child{
                    font-family: 'Noto Nastaliq Urdu', serif;

                }
            }

            
        }

        .underline{
            width: 100%;
            height: 2px;
            background-color: var(--geryBackground);
            
        }
    }
    
    

    
    
`