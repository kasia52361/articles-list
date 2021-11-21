import styled from 'styled-components';

const CheckboxInput = styled.div`
    position: relative;
    margin-bottom: 15px;
    margin-right: 10px;

    > .input {
        position: absolute;
        left: -9999px;
        opacity: 0;

        &:checked + .label:after {
            opacity: 1;
        }
    }

    > .label {
        position: relative;
        padding-left: 25px;
        font-size: 16px;

        &:before,
        &:after {
            content: '';
            position: absolute;
        }

        &:before {
            width: 14px;
            height: 14px;
            border: 1px solid black;
            left: 0;
            border-radius: 5px;
            transform: translateY(-50%);
            top: 50%;
        }

        &:after {
            width: 8px;
            height: 4px;
            left: 3px;
            top: 7px;
            border-bottom: 1px solid black;
            border-left: 1px solid black;
            transform: rotate(-45deg);
            opacity: 0;
        }
    }
`;

export default CheckboxInput;
