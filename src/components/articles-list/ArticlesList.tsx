import React from 'react';

// components
import Article from './subcomponents/article/Article';

// types
import { IArticle } from '../../types';

type Props = {
    articles: IArticle[];
};

const ArticlesList: React.FC<Props> = ({ articles }: Props) => {
    return (
        <>
            {articles &&
                articles.map((article) => {
                    return <Article key={article.id} article={article} />;
                })}
        </>
    );
};

export default ArticlesList;
