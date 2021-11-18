import React from 'react';

import SortButton from './subcomponents/sort-button/SortButton';

const Sort: React.FC = () => {
    return (
        <div>
            <h3>Sort by date</h3>

            <div>
                <SortButton direction="up" />
                <SortButton direction="down" />
            </div>
        </div>
    );
};

export default Sort;
