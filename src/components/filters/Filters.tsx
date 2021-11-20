import React from 'react';

// components
import Checkbox from './subcomponents/checkbox/Checkbox';

type Props = {
    handleCheckbox: (label: string, type: string, checked: boolean) => void;
};

const Filters: React.FC<Props> = ({ handleCheckbox }: Props) => {
    return (
        <div className="mt-6 md:mt-0 pt-0.5">
            <h2 className="text-lg md:text-2xl md:mb-3">Data sources</h2>
            <div className="flex md:flex-col">
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
        </div>
    );
};

export default Filters;
