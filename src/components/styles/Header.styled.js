import styled from 'styled-components';
export const StyledHeader = styled.header`
background-color: var(--geryBackground);
position: relative;
padding-top: 9rem;
padding-bottom: 3rem;
color: var(--primaryBlue);
overflow-x: hidden;
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

@media(max-width:1250px){
    .hero-text_wrapper{
        width: 80%;
    }
}

@media(max-width:1000px){
    .hero-text_wrapper{
        font-size: 4rem;
    }
}

@media(max-width:800px){
    .svg1{
        width: 90px;
            
    }
    .svg2{
        width: 150px;
    }
    .hero-text_wrapper{
        width: 95%;
        margin-left: 0;
    }
}

@media(max-width:700px){
    padding-top: 6rem;
    .hero-text_wrapper{
        font-size: 3rem;
        .span-child{
            margin-right: .8rem;
        }
    }
    .down-svg{
        margin-top: 0;
        img{
                max-width: 20px;
            }
        .scroll-container{
            display: flex;
            align-items: center;
            gap: 1rem;
            flex-direction: row-reverse;
            p{
                font-size: .9rem;
            }
        }
    
}
}
@media(max-width:520px) {
    .hero-text_wrapper{
        font-size: 2.5rem;
        width: 100%;
        .span-child{
            margin-right: .7rem;
        }
    }
}

@media(max-width:420px) {
    .hero-text_wrapper{
        font-size: 2.3rem;
        width: 100%;
        .span-child{
            margin-right: .6rem;
        }
    }
}
@media(max-width:360px) {
    .hero-text_wrapper{
        font-size: 2.2rem;
        width: 100%;
        .span-child{
            margin-right: .5rem;
        }
    }
}
`