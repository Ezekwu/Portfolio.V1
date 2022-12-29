import styled from "styled-components";

export const StyledAmoutme = styled.section`
background-color: var(--primaryBlue);
color: var(--geryBackground);


padding: 4rem 0;
&>div{
    display: flex;
    gap: 10rem;
    .col-1{
        
        .about-text_wrapper{
            display: flex;
            gap: .5rem;
            font-size: 2.3rem;
            display: flex;
            overflow: hidden;
            .span-parent{
                overflow: hidden;
                display: flex;
                .span-child{
                    font-family: 'Noto Nastaliq Urdu', serif;

                }
            }
        }
    }

    .col-2{
        font-size: 1.2rem;
        display: grid;
        column-gap: 2rem;
        row-gap: 3rem;
        grid-template-columns: repeat(2, 1fr);
        grid-template-columns: repeat(2, 1fr);

        .point{
            display: flex;
            align-items: flex-start;
            gap: 1rem;
            img{
                width: 22px;
            }
            .star-svg{
                width: 33px;
            }
        }
    }
}
`