import React, { useState } from 'react';

// components
import Filters from './components/filters/Filters';
import Sort from './components/sort/Sort';
import ArticlesList from './components/articles-list/ArticlesList';

// types
import { IArticle } from './types';

// config
import { api } from './config';

// styles
import './App.css';

const App: React.FC = () => {
    const [articlesList, setArticlesList] = useState<IArticle[]>([]);
    const handleCheckbox = (
        label: string,
        type: string,
        checked: boolean
    ): void => {
        if (checked) {
            fetch(`${api}/${label.toLowerCase()}`)
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    }
                    return Promise.reject(response);
                })
                .then((data) => {
                    setArticlesList((prevState) => [
                        ...prevState,
                        ...data.articles,
                    ]);
                })
                .catch((error) => {
                    console.log('Something went wrong.', error);
                });
        } else {
            const filteredArr = articlesList.filter((article) => {
                return article.category !== type;
            });
            setArticlesList(filteredArr);
        }
    };
    return (
        <div className="container">
            <div className="row">
                <div className="w-1/2 md:w-auto">
                    <Filters handleCheckbox={handleCheckbox} />
                </div>
                <div className="w-1/2 md:w-full md:order-first">
                    <Sort />
                </div>
                <div className="w-full md:flex-1">
                    <ArticlesList articles={articlesList} />
                </div>
            </div>
        </div>
    );
};

export default App;
