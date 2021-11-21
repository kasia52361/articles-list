import React from 'react';

// types
import { SortingTypes } from '../../../../types';

// styles
import Button from './styles';

type Props = {
    direction: SortingTypes;
    handleSort: (direction: SortingTypes) => void;
    activeDirection: SortingTypes;
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
