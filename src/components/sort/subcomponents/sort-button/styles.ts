import styled from 'styled-components';

const Button = styled.button`
    appearance: none;
    background-color: transparent;
    box-shadow: none;
    border: 0;
    display: block;
    border: 0;
    padding: 0;
    margin: 3px 0;

    > .triangle {
        display: block;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 15px 7.5px 0 7.5px;
        border-color: black transparent transparent transparent;
        ${({ direction }) =>
            direction === 'ASC' && `transform: rotateX(180deg);`}
        ${({ active }) => active && `border-top-color: gray; `}
    }
`;

export default Button;
