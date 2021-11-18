import styled, { css } from 'styled-components';

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
        border-width: ${({ direction }) =>
            direction === 'down' ? '15px 7.5px 0 7.5px' : '0 7.5px 15px 7.5px'};
        border-color: ${({ direction }) =>
            direction === 'down'
                ? 'black transparent transparent transparent'
                : 'transparent transparent black transparent'};
    }
`;

export default Button;
