import styled from "styled-components";

export const StyledAmoutme = styled.section`
background-color: var(--primaryBlue);
color: var(--geryBackground);
padding: 4.5rem 0;
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

@media(max-width:1000px) {
    &>div{
        gap: 5rem;
    }
}
@media(max-width:900px) {
    &>div{
        gap: 3rem;
        .col-2{
            column-gap: 1.5rem;
            row-gap: 2rem;
            font-size: 1.1rem;
        }
    }
}
@media(max-width:850px) {
    &>div{
        flex-direction: column;
    }
}
@media(max-width:650px) {
    &>div{
        gap: 2rem;
        .col-1{
            .about-text_wrapper{
                font-size: 2rem;
                
            }
        }
        .col-2{
            column-gap: 1rem;
            row-gap:1.3rem;
            font-size: 1.1rem;
        }
    }
}
@media(max-width:600px) {
    padding: 3rem 0;
    &>div{
        .col-2{
            grid-template-columns: 1fr;
            grid-template-rows: 1fr;
            row-gap: 2rem;
            font-size: 1rem;
            .point{
                gap: .5rem;
            img{
                width: 18px;
            }
            .star-svg{
                width: 25px;
            }
        }
        }
    }
}
`