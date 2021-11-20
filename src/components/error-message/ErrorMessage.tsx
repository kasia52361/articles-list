import React from 'react';

// styles
import Error from './styles';

type Props = {
    text: string;
};

const ErrorMessage: React.FC<Props> = ({ text }: Props) => {
    return <Error>{text}</Error>;
};

export default ErrorMessage;
