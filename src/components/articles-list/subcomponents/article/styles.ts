import styled from 'styled-components';

const SingleArticle = styled.div`
    display: flex;
    align-items: flex-start;
    margin-bottom: 20px;

    > .imgcontainer {
        width: 120px;
        height: 72px;
        position: relative;
        background: lightgray;
        @media (min-width: 1024px) {
            width: 300px;
            height: 180px;
        }

        > .img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        > .tag {
            position: absolute;
            top: 5px;
            left: 5px;
            background-color: grey;
            color: white;
            font-size: 12px;
            text-transform: uppercase;
            padding: 1px 3px;
            z-index: 1;
        }
    }

    > .content {
        padding-left: 15px;
        flex: 1;
    }
`;

export default SingleArticle;
