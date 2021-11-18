import React from 'react';

// styles
import CheckboxInput from './styles';

type Props = {
    label: string;
    type: string;
    handleCheckbox: (label: string, type: string, checked: boolean) => void;
};

const Checkbox: React.FC<Props> = ({ label, type, handleCheckbox }: Props) => {
    return (
        <CheckboxInput>
            <input
                className="input"
                id={`filter-${label}`}
                type="checkbox"
                name="filters"
                onChange={(e) => {
                    const target = e.currentTarget as HTMLInputElement;
                    handleCheckbox(label, type, target.checked);
                }}
            />
            <label className="label" htmlFor={`filter-${label}`}>
                {label}
            </label>
        </CheckboxInput>
    );
};

export default Checkbox;
