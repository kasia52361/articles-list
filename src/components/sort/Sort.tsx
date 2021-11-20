import React from 'react';

import SortButton from './subcomponents/sort-button/SortButton';

type Props = {
    handleSort: (direction: 'DESC' | 'ASC') => void;
    activeDirection: 'DESC' | 'ASC';
};

const Sort: React.FC<Props> = ({ handleSort, activeDirection }: Props) => {
    return (
        <div className="flex items-center justify-end mt-5 mb-12">
            <h3 className="text-lg md:text-2xl mr-3">Sort by date</h3>

            <div>
                <SortButton
                    direction="ASC"
                    handleSort={handleSort}
                    activeDirection={activeDirection}
                />
                <SortButton
                    direction="DESC"
                    handleSort={handleSort}
                    activeDirection={activeDirection}
                />
            </div>
        </div>
    );
};

export default Sort;
