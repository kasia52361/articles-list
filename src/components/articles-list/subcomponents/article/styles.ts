import styled from 'styled-components';

const SingleArticle = styled.div`
    display: flex;

    > .imgcontainer {
        width: 300px;
        padding-top: 20%;
        position: relative;
        background: lightgray;

        > .img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    > .content {
        padding-left: 15px;
        flex: 1;

        > .flex {
            display: flex;
            align-items: center;

            > .title {
                flex: 1;
            }
        }
    }
`;

export default SingleArticle;
