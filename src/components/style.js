import Styled from 'styled-components'


export const OutterContainer = Styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    height: 100vh;
    width:100vw;

    background-color: #ccc;
`

export const InnerContainer = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    height: 80vh;
    width: 90vw;

    background-color: #fff;
    box-shadow: 0px -0px 5px 3px rgba(0, 0, 0, 0.2);
    border-radius: 5px;

    &:hover{
        animation-name: hover;
        animation-duration: 300ms;
        animation-fill-mode: forwards;
    }
    
    &:not(hover){
        animation-name: nothover;
        animation-duration: 300ms;
        animation-fill-mode: forwards;
    }
    
    
    @keyframes hover{
        0%{
            box-shadow: 0px -0px 5px 3px rgba(0, 0, 0, 0.2);
            width: 90vw;
        }100%{
            box-shadow: 0px -0px 7px 10px rgba(0, 0, 0, 0.2);
            width: 91vw;
        }
    }
    
    @keyframes nothover{
        0%{
            box-shadow: 0px -0px 7px 10px rgba(0, 0, 0, 0.2);
            width: 91vw;
        }100%{
            box-shadow: 0px -0px 5px 3px rgba(0, 0, 0, 0.2);
            width: 90vw;
        }
    }
`

export const ButtonBar = Styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;

    max-height: 100px;
    height: 8%;
    width: 100vw;

    background-color: #fff;
`

export const LogoHolder = Styled.div`
    height: 100%;
    width: 100%;
    background-color: #ff2525;
    float: left;
`

export const Logo =  Styled.img`
    height: 100%;
`

export const TopButton = Styled.button`
    height: 100%;
    padding: 0px 10px 0px 10px;
    margin: 0px 10px 0px 10px;
    min-width: 100px;
    cursor: pointer;

    background-color: #fff;
    color: #000;
    border: 1px solid #000;
    border-radius: 5px;

    &:hover{
        animation-name: sobre;
        animation-duration: 300ms;
        animation-fill-mode: forwards;
    }

    &:not(hover){
        animation-name: notsobre;
        animation-duration: 300ms;
        animation-fill-mode: forwards;
    }

    @keyframes sobre{
        0%{
            background-color: #fff;
            border: 1px solid #000;
            color: #000;
        }100%{
            background-color: #000;
            border: none;
            color: #fff;
        }
        
    }

    @keyframes notsobre{
        0%{
            background-color: #000;
            border: none;
            color: #fff;
        }100%{
            background-color: #fff;
            border: 1px solid #000;
            color: #000;
        }
    }
`