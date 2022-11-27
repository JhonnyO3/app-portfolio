import styled from "styled-components";



/*HOME --------------------------------------*/
export const DivHome = styled.div`
font-family: 'Poppins', sans-serif;
text-decoration: none;
color: #fff;

#img-principal img{
  max-width: 856px;
  max-height: 853px;
}

#container {
  display: flex;
}
#principal{
  padding: 5rem;

  span{
    background: -moz-linear-gradient(to right,#4DA5FF, #7C8EFC, #9F7EFA  );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  #sub-titulo p{
    max-width: 81%;

    font-weight: 700;
    font-size: 1.7rem;
    color: #9BABB4;
  }

   h1{
    font-weight: 900;
    max-width: 79%;
    font-size: 4rem;
  }
  #botao-cv{
    button{
      color: white;
      font-family: 'Poppins', sans-serif;
      border: none;
      font-size: 1.25rem;
      padding: .5rem 3rem;
      font-weight: 600;
      margin-top: 2rem;
      border-radius: 3rem;
      background-color: #2190FF;
    }

  }
  #redes{
    display: flex;
    
    a{
      color: white;
      margin: 3rem .5rem;
      font-size: 2.9rem;
 
    }
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
    font-size: 1.8rem;
}
a:hover {
    color: #7281f2;
    display: block;
}
#logo {
    font-size: 2rem;
    font-weight: bold;
    margin-left: 1rem;
}
#header {
  padding: 5rem;
    box-sizing: border-box;
    height: 70px;
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