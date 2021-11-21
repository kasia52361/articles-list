import React, { useState, useEffect } from 'react';

// components
import Filters from './components/filters/Filters';
import Sort from './components/sort/Sort';
import ArticlesList from './components/articles-list/ArticlesList';
import ErrorMessage from './components/error-message/ErrorMessage';

// types
import { IArticle, SortingTypes } from './types';

// config
import { api } from './config';

// helpers
import { sortBy, getUrl } from './helpers';

// styles
import './App.css';

const App: React.FC = () => {
    const [articlesList, setArticlesList] = useState<IArticle[]>([]);
    const [activeDirection, setActiveDirection] = useState<SortingTypes>(null);
    const [error, setError] = useState<string>('');
    const [refreshSort, setRefreshSort] = useState<boolean>(false);

    useEffect(() => {
        handleSort(activeDirection);
    }, [refreshSort]);

    const handleCheckbox = (
        label: string,
        type: string,
        checked: boolean
    ): void => {
        if (checked) {
            (async () => {
                const response = await getUrl(`${api}/${label.toLowerCase()}`);

                response.error ? setError(`${response.error}`) : setError('');

                if (response.ok) {
                    setArticlesList((prevState) => [
                        ...prevState,
                        ...response.data.articles,
                    ]);
                }
                if (activeDirection) {
                    setRefreshSort(!refreshSort);
                }
            })();
        } else {
            const filteredArr = articlesList.filter((article) => {
                return article.category !== type;
            });
            setArticlesList(filteredArr);
        }
    };

    const handleSort = (direction: SortingTypes): void => {
        if (articlesList.length) {
            const sorted = [...articlesList].sort((a, b) =>
                sortBy(a, b, direction)
            );
            setArticlesList(sorted);
            setActiveDirection(direction);
        }
    };
    return (
        <div className="container">
            <div className="row">
                <div className="w-auto flex-1 md:flex-initial">
                    <Filters handleCheckbox={handleCheckbox} />
                </div>
                <div className="w-auto md:w-full md:order-first">
                    <Sort
                        handleSort={handleSort}
                        activeDirection={activeDirection}
                    />
                </div>
                <div className="w-full md:flex-1">
                    {error && <ErrorMessage text={error} />}
                    <ArticlesList articles={articlesList} />
                </div>
            </div>
        </div>
    );
};

export default App;
