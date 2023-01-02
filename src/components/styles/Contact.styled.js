import styled from "styled-components";

export const StyledContact = styled.section`
background-color: var(--primaryBlue);
color: var(--geryBackground);
padding: 4.5rem 0;
text-align: center;

.contact-text_wrapper{
    display: flex;
    justify-content: center;
    gap: .5rem;
    font-size: 3rem;
    overflow: hidden;
    margin-bottom: 2rem;
    .span-parent{
        overflow: hidden;
        display: flex;
        .span-child{
            font-family: 'Noto Nastaliq Urdu', serif;

        }
    }
}
.contact-desc{
    margin-bottom: 3rem;
    font-size: 1.1rem;
    
}

`