import styled from 'styled-components';

const Preloader = styled.div`
    border: 5px solid #eeeeee;
    border-top: 5px solid #fca5a5;
    border-radius: 50%;
    width: 80px;
    height: 80px;
    animation: spin 2s linear infinite;
    margin: auto;

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;

export default Preloader;
