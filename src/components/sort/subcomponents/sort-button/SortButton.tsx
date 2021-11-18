import React from 'react';

import Button from './styles';

type Props = {
    direction: string;
};

const SortButton: React.FC<Props> = ({ direction }: Props) => {
    return (
        <Button direction={direction}>
            <span className="triangle"></span>
        </Button>
    );
};

export default SortButton;
