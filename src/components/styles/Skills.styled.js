import styled from "styled-components";

export const StyledSkills = styled.section`
background-color: var(--geryBackground);
color: var(--primaryBlue);
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
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        column-gap: 1.5rem;
        row-gap: 2.5rem;
        
        
        .card{
            text-align: center;
            
            img{
                width: 50px;
                margin-bottom: .8rem;
            }
            p{
                background-color:#bdbdbd14 ;
                padding: .01rem .3rem;
                font-size: .8rem;
                border-radius: 2px;
                width: 100%;
                cursor: default;
            }
        }

        .card:hover{
            p{
                background-color:var(--primaryBlue) ;
                color: var(--geryBackground);
                transition: background-color 0.2s ease-in-out 0s;
            }
        }
    }
}
`