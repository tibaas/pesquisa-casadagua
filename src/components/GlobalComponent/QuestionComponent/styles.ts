import styled from "styled-components";

export const QuestionContainer  = styled.div`

display: flex;
flex-direction: column;
gap: 0.2rem;
width: 30rem;
min-height: 13.5rem;
border: 1px solid #3A536B;
box-shadow:  5px 5px #3A536B;
padding: 1rem;
border-radius: 15px;
font-smooth: always;  

p {
    font-weight: bold;
    color: ${props => props.theme['background']};
    margin-bottom: 0.7rem; 
    
}

div {

cursor: pointer;
display: flex;
align-items: center;

    label {
        color: #0B1B2B;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 0.4rem;
        margin-left: 0.5rem;
        font-size: 0.9rem;
        font-weight: bold;

    }

    input {
        width: 1rem;
        height: 1rem;
        accent-color: #0B1B2B;
        cursor: pointer;
              
    }
}


@media (max-width: 540px) {

width:22.5rem;
    
    div {
        width:20rem;
    }
    span{
        font-size: 12px;
    }
    p {
        font-size:13px;
    } 
}

`

export const LabelContainer = styled.div`


min-width: 27rem;
height: 2rem;
border-bottom: 3px solid #3A536B;

border-radius: 9px;

cursor: pointer;

&:hover {
          
        background:#fff;
        border-bottom: 3px solid #3A536B;
        transition: ease .7s; 
    }

@media (max-width: 540px) {
    min-width: 20rem;
}

`

export const NextButton = styled.button`

width: 7rem;
height: 2.3rem;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
margin-left: 23.5rem;
margin-top: 1rem;
gap: 0.4rem;
border-radius: 20px;
border: 2px solid #0B1B2B;
background: #fff;
color: #0B1B2B;
outline: none;
    span {
        font-size: 1rem;
    }

    &:hover {
        background: #112131;
        color: #fff;
        box-shadow: 3px 3px 1px #fff;
        transition: ease .6s;
    }

    @media (max-width: 540px) {
        span {
            display: none;
        }
        width: 4rem;

        margin-left: 0;
    }
`

export const  FormButton = styled.button`

width: 7rem;
height: 2.3rem;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
margin-left: 6rem;
margin-top: 1.5rem;
gap: 0.4rem;
border-radius: 20px;
border: 2px solid #0B1B2B;
background: #fff;
color: #0B1B2B;
outline: none;


    span {
        font-size: 1rem;
        font-weight: bold;
    }

    &:hover {
        background: #112131;
        color: #fff;
        box-shadow: 3px 3px 1px #fff;
        transition: ease .6s;
    }




`
export const TextAreaContainer = styled.div`

display: flex;
align-items: center;
flex-direction: column;
gap: 0.5rem;

textarea {
    padding:0.7rem;
    resize: none;
    outline: none;
    background: #e0e0e0 ; 
    font-size: 0.875rem;
    color: #3d3d3d;
    box-shadow: 5px 5px 8px #525252;

}



`