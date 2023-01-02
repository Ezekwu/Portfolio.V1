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


.email{
    color: var(--geryBackground);
    text-decoration: none;
    border: 1px solid var(--geryBackground);
    padding: 1rem 1.1rem;
    position: relative;
    z-index: 34;
    
}
.email:hover{
    color: var(--primaryBlue);

}

.email::after{
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

.email:hover::after{
    transform: scaleX(1);
    transform-origin: left;
}

.links-desc{
    margin-top: 3rem;
    font-size: 1.1rem;
    margin-bottom: 2rem;
}
.links{
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;

    a{
        color: var(--geryBackground);
        text-decoration: none;
        font-size: 1.1rem;
        transition: all .2s ease-in;
    }
    a:hover{
        color: #1d212b6b;
    }
    .circle{
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: var(--geryBackground);
    }
}
`