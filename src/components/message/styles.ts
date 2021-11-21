import styled from 'styled-components';

const MessageText = styled.div`
    font-size: 16px;
    line-height: 1.2;
    margin: 6px auto;
    text-align: center;
    ${({ type }) => type === 'error' && `color: red; `}

    @media (min-width: 1024px) {
        font-size: 20px;
    }
`;

export default MessageText;
