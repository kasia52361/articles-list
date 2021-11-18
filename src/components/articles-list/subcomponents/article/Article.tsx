import React from 'react';

// types
import { IArticle } from '../../../../types';

// styles
import SingleArticle from './styles';

type Props = {
    article: IArticle;
};

const Article: React.FC<Props> = ({ article }: Props) => {
    const { category, date, image, title, preamble } = article;

    return (
        <SingleArticle>
            {category}
            <div className="imgcontainer">
                <img
                    className="img"
                    src={`${
                        image
                            ? image
                            : 'https://dummyimage.com/500x300/7d687d/ffffff&text=thumb'
                    }`}
                    alt={title}
                />
            </div>
            <div className="content">
                <div className="flex">
                    <h2 className="title">{title}</h2>
                    <div>{date}</div>
                </div>
                <div>{preamble}</div>
            </div>
        </SingleArticle>
    );
};

export default Article;
