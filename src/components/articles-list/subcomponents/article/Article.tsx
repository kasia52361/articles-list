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
            <div className="imgcontainer">
                <div className="tag">{category}</div>
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
                <div className="row">
                    <div className="w-full flex-1">
                        <h2 className="text-xl md:text-3xl">{title}</h2>
                    </div>

                    <div className="w-full md:w-auto pt-1">{date}</div>
                </div>
                <div className="hidden md:block mt-2">{preamble}</div>
            </div>
        </SingleArticle>
    );
};

export default Article;
