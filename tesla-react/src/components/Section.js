import React from 'react'
import styled from "styled-components"
import Fade from 'react-reveal/Fade';


const Wrap =styled.div`
    width: 100vh;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: ${props => `url("/images/${props.bgImage}")`}
    display: flex;
    flex-direction: column;
    justify-content: space-between; //vertical
    align-items: center;//horizontal
`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
    z-index: -1;

`

const ButtonGroup = styled.div`
    display:flex;
    margin-bottom:30px;
    @media (max-width:768px) {
        flex-direction: column;
        
    }

`
//flex-direciton column align the buttons vertically, when the screen width becomes 768px.

const LeftButton = styled.div`
    background: black;
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items:center;
    border-radius: 100px;
    opacity: 0.5;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;

`

const RightButton = styled(LeftButton)`
    background: white;
    opacity: 0.65;
    color:black;
`

const DownArrow = styled.img`
    margin-top: 20px;
    height: 40px;
    overflow-x: hidden;
    animation: animateDown infinite 1.5s;
`

const Buttons = styled.div`
 
`

function Section({title,description,leftBtnText,rightBtnText, backgroundImg }) {

  return (
    <Wrap bgImage = {backgroundImg}>

        <Fade bottom>
            <ItemText>
                <h1>{title}</h1>
                <p>{description}</p>
            </ItemText>
        </Fade>


        <Buttons>
            <Fade bottom>
                <ButtonGroup>

                    <LeftButton>
                        {leftBtnText}
                    </LeftButton> 

                    { rightBtnText && 
                        <RightButton>
                            {rightBtnText}
                        </RightButton>
                    }
                    {/* if only right button exists, then only its displayed, otherwise the left btn is displayed in the center */}

                </ButtonGroup>
            </Fade>
        </Buttons>

        <DownArrow src="/images/down-arrow.svg"/>

       

    </Wrap>
  )
}

export default Section

