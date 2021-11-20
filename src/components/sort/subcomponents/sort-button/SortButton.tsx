import React from 'react';

import Button from './styles';

type Props = {
    direction: 'DESC' | 'ASC';
    handleSort: (direction: 'DESC' | 'ASC') => void;
    activeDirection: 'DESC' | 'ASC';
};

const SortButton: React.FC<Props> = ({
    direction,
    handleSort,
    activeDirection,
}: Props) => {
    return (
        <Button
            direction={direction}
            active={activeDirection === direction}
            onClick={() => handleSort(direction)}
        >
            <span className="triangle"></span>
        </Button>
    );
};

export default SortButton;
