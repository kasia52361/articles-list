import React from 'react';

// components
import Checkbox from './subcomponents/checkbox/Checkbox';

type Props = {
    handleCheckbox: (label: string, type: string, checked: boolean) => void;
};

const Filters: React.FC<Props> = ({ handleCheckbox }: Props) => {
    return (
        <div>
            <h2>Data sources</h2>
            <Checkbox
                label="Fashion"
                type="fashion"
                handleCheckbox={handleCheckbox}
            />
            <Checkbox
                label="Sports"
                type="sport"
                handleCheckbox={handleCheckbox}
            />
        </div>
    );
};

export default Filters;
