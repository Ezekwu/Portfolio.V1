import styled from "styled-components";

export const StyledProjectDesc = styled.div`
background-color: var(--geryBackground);
color: var(--primaryBlue);


h2, h3{
    font-weight: 200;
    font-family: 'Noto Nastaliq Urdu', serif;
}

h2{
    text-align: center;
    font-size: 3rem;
}
h3{
    margin-bottom: .5rem;
}

h3{
    font-size: 2rem;
}
p{
    padding-left: 2rem;
}
ul{
    margin-top: 1.5rem;
    li{
        margin-bottom: 1rem;
    }
}

.padding-0{
    padding: 0;
}
.div{
    margin: 3rem 0;
}
&>div{
    padding-top: 1rem;
    padding-bottom: 3rem;
    .title{
        text-align: center;
        margin-top: 1rem;
        margin-bottom: 2rem;
        font-size: 3rem;
    }
    .link{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 3rem;
        gap: 2rem;
        a{
            color: var(--primaryBlue);
            text-decoration: none;
            transition: all .2s ease-in;
        }
        a:hover{
            color: #7ba6a6;
        }
    }
    .thumbnail{
        padding:  4rem;
        background-color: #d1ecec1c;
        width: 93%;
        margin: 0 auto 8rem;
        

        img{
            border: 1px solid var(--geryBackground);
            border-radius: 5px;
        }
    }
    .border{
        border-bottom: 1px solid #418a8a6b;
        padding:0;
    }
}
@media(max-width:1000px){
    &>div{
        
        .thumbnail{
            padding: 3rem;
        }
    }
}

@media(max-width:800px){
    &>div{
        .title{
            font-size: 2.5rem;
        }
        h2{
            font-size: 2.5rem;
        }
        h3{
            font-size: 1.8rem;
        }
        .thumbnail{
            padding: 2.5rem;
        }
    }
}

@media(max-width:600px){
    &>div{
        .thumbnail{
            padding: 5%;
            margin: 0 auto 3rem;
        }
        h3{
            font-size: 1.6rem;
        }
    }
}

`