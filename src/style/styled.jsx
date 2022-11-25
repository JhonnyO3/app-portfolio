import styled from "styled-components";


/*HOME-------------------------------------- */
export const DivHome = styled.div`
margin: 0;
padding: 0;
font-family: 'Roboto Mono', monospace;

#cards {
  @media (max-width: 600px) {
    max-width: 600px;
    flex-wrap: wrap;
   
  }
}


#container{
  @media (max-width: 1920px) {
    #main{
      position: relative;
      top: 10rem;
    }
  }
  @media (max-width: 600px) {
  flex-wrap: wrap;

  img{
    position: relative;
    top: 3rem;
    max-width: 20rem;
  }

  #main {
    position: relative;
  }
  #introducao {
    max-width: 600px;


    h1{
      width: 100%;
      
      font-size: 2rem;
    }
    p{
      font-size: 1.5rem;
      width: 100%;
    }
    #redes{
      a{
        color: white;
      }
      
    }
    #arrow-down{
      display: none;
    }


}

}
}
#cards {
  margin-top: 4rem;
  display: flex;
  gap: 10px;

  #works{
    max-width: 35rem;
    padding: 20px;
    img{
      width: 100%;
    }


  }
}
#main #about-work {
  @media (max-width: 600px) {
    margin: auto;
    max-width: 600px;
    top: 10rem;
    h3{
      width: 90%;
      font-size:2.5rem;
    }
  }
  p{
    word-break: break-all;
        font-size: 1.3rem;
        text-align: justify;
      }
    a{
        text-align: center;
        font-size: 1.3rem;
        

    }
    

  }




#arrow-down{
  position: relative;
  top: 2rem;
  color: blue;

  #icon {
    font-size:12rem;
    color: #7281F2;
  }
  #icon:hover{
    transition: 2s;
    color: #354ae9;
    font-size: 13rem;
  }
 

  
}

#linha {
  font-size: 5px;

  padding-right:30%;
  width: 100%;
  position: relative;
  bottom: 1rem;
  background-color: white;
}


#main {
  margin: auto;
  width: 90%;
  top: 10rem;
  position: relative;


  
}

#container {
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;


}
#introducao {
  position: relative;
  color: white;
  max-width: 90%;
  h1 {
    font-weight: 900;
    width: 100%;
    font-size:4.8rem;
  }
  p{
    word-break: break-all;
    font-size: 2rem;
    margin-top:2rem;
    width: 85%;
    text-align: justify;
  }
}
#redes{
  margin-top: 2rem;
  display: flex;
  gap: 2rem;
  a{
    color: #000000;

    font-size: 4rem;
  }
  a:hover{
    transition: 2s;
    color: #9e9e9e;
  }

}
#image{
 img{
  width: 30rem;
  height: 100%;
  border-radius: 50%;
  background-color: #1a1a1a;
 }

}
#about-work{
  position: relative;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 5rem;
  top: 3rem;
  padding-bottom: 10rem;

  h3 {
    font-size: 3.7rem;
    font-weight: bold;
  }
  p{
    font-size: 2rem;
    margin-top: .5rem;
    margin-bottom: 1rem;
  }
  a{
    color: #7281F2;
    margin-top: 5px;
    font-size: 2rem;
  }
  a:hover {
    transition: 2s;
    color: #354ae9;
    font-size: 3rem;
  }
}

`

/*HEADER------------------------------------ */
export const DivHeader = styled.header`
margin: 0;
padding: 0;

#logo span {
    font-size: 30px;
}
a{
    color: #fff;
    text-decoration: none;
    font-family: 'Roboto Mono', monospace;
    font-size: 1.5rem;
    padding: 10px;
}
a:hover {
    color: #7281f2;
    display: block;
}
#logo {
    padding: 30px;
    font-size: 2rem;
    font-weight: bold;
    margin-left: 1rem;
}
#header {
    box-sizing: border-box;
    height: 70px;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
#menu {
    padding: 20px;
    display: flex;
    list-style: none;
    gap: .5rem;
}
#menu a {
    display: block;
    padding: .5rem;
}
#menu a:hover {
    text-decoration: overline;
    transition: 0.5s;

}
#btn-mobile {
    display: none;
}

@media (max-width: 600px) {
    #logo{
        font-size: 1.7rem;
    }
    #btn-mobile {
        display: flex;
        width: 100%;
        height: 100%;
        padding: .5rem 1rem;
        font-size: 2rem;
        border: none;
        background: none;
        cursor: pointer;
        gap: .5rem;
    }
    
  #hamburguer {
    width: 20px;
    border-top: 2px solid;
    display: block;
  }
  #hamburguer::after, #hamburguer::before {
    content: '';
    display: block;
    width: 20px;
    height: 2px;
    background-color: currentColor;
    margin-top: 5px;
    transition: .3s;
    position: relative;
  }
  #nav.active #hamburguer {
    border-top-color: transparent ;
  }
  #nav.active #hamburguer::before {
    transform: rotate(135deg);

  }
  #nav.active #hamburguer::after {
    transform: rotate(-135deg);
    top: -7px;

    
  }

    #menu {
        display: block;
        position: absolute;
        width: 100%;
        top: 70px;
        right: 0;
        transition: .6s;
        z-index: 1000;
        visibility: hidden;
        overflow-y: hidden;
        height: 0;
        /*
        visibility: hidden;
        overflow-y: hidden;
        */
    }
    #nav.active #menu {
    height: calc(100vh - 70px);
    visibility: visible;
    overflow-y: auto;

  }
  #menu a {
    padding: 1rem 1rem;
    margin: 0 1rem;
    border-bottom: 2px solid rgb(38, 38, 38);
  }

    

}
`