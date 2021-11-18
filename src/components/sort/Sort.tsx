import React from 'react';

import SortButton from './subcomponents/sort-button/SortButton';

const Sort: React.FC = () => {
    return (
        <div className="flex items-center justify-end mt-5 mb-12">
            <h3 className="text-lg md:text-2xl mr-3">Sort by date</h3>

            <div>
                <SortButton direction="up" />
                <SortButton direction="down" />
            </div>
        </div>
    );
};

export default Sort;
