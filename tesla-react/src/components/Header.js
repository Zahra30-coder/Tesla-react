import React from 'react'
import styled from "styled-components"
import MenuIcon from '@mui/icons-material/Menu';

//import CloseSharpIcon from '@mui/icons-material/CloseSharp';


const Container = styled.div`
  min-height: 60px;
  position: fixed; //sticks on the top
  display: flex;
  align-items: center;
  padding: 0 20px;
  top:0;
  left:0;
  right:0;
  justify-content: space-between;
`

const Menu = styled.div`
  display:flex;
  align-items: center;
  flex: 1;
  justify-content: center;

  p {
    font-weight: 600;
    text-decoration:uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;

  }

  @media(max-width: 768px) {
    display: none;
  }
`
const RightMenu = styled.div`
  display:flex;
  align-items: center;
  
  a {
    font-weight: 600;
    text-decoration:uppercase;
    margin-right: 10px;
  }

`
const CustomMenu = styled(MenuIcon)`
  cursor: pointer;

`

const BurgerNav = styled.div`
  position:fixed; //always stuck on top
  top:0;
  bottom:0;
  right:0;
  background-color: white;
  width: 300px;
  z-index: 10;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: flex-start;
  li{
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, .2);
  }
    
  a{
    font-weight: 600;
  }

`

const CustomClose = styled(CloseIcon)`
  cursour: pointer;
`

const CloseWrapper = styled.div`
  display:flex;
  justify-content: flex-end; //left aligns the cross icon
`

function Header() {
  return (

    <Container>
      <a>
        <img src='/images/logo.svg' alt=""/>
      </a>
      
      <Menu>
        <p><a href="#">Model-S</a></p>
        <p><a href="#">Model-Y</a></p>
        <p><a href="#">Model-3</a></p>
        <p><a href="#">Model-x</a></p>
      </Menu>

      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <CustomMenu/>
      </RightMenu>

      <BurgerNav>
        <CloseWrapper>
            <CustomClose/>
          </CloseWrapper>

        <li><a href='#'>Existing Inventory</a></li>
        <li><a href='#'>Used Inventory</a></li>
        <li><a href='#'>Trade-in</a></li>
        <li><a href='#'>Cyber Truck</a></li>
        <li><a href='#'>Roadaster</a></li>
        <li><a href='#'>Existing Inventory</a></li>
        <li><a href='#'>Existing Inventory</a></li>
        <li><a href='#'>Existing Inventory</a></li>
        <li><a href='#'>Existing Inventory</a></li>


      </BurgerNav>
    </Container>
  )
}

export default Header

