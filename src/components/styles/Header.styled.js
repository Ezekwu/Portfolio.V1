import styled from 'styled-components';
export const StyledHeader = styled.header`
background-color: #1d212b;
height: 100vh;
position: relative;
color: var(--primaryBlue);
.svg1{
    position: absolute;
    top: 0;
    right: -15px;
    z-index: 0;
}

.svg2{
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 0;
}

.hero-text_wrapper{
    
    font-size: 4.5rem;
    margin-left: 4rem;
    display: flex;
    flex-wrap: wrap;
    width: 60%;
    padding-top: 1.5rem;
    

    .span-parent{
        overflow: hidden;
        display: flex;
    }
    
    .span-child{ 
        margin-right: 1rem;
    }

}

.down-svg{
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: 4rem;
    img{
            max-width: 30px;
        }
    .scroll-container{
        display: flex;
        align-items: center;
        gap: 1rem;
        flex-direction: row-reverse;
        p{
            font-size: 1.1rem;
        }
    }
    
}



`