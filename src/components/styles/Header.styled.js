import styled from 'styled-components';
export const StyledHeader = styled.header`
background-color: var(--geryBackground);
position: relative;
padding-bottom: 3rem;
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
    font-size: 5rem;
    
    margin-left: 4rem;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    display: flex;
    flex-wrap: wrap;
    width: 60%;
    overflow: hidden;

    .span-parent{
        overflow: hidden;
        display: flex;
        
    }
    
    .span-child{ 
        margin-right: 1rem;
        font-family: 'Noto Nastaliq Urdu', serif;
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