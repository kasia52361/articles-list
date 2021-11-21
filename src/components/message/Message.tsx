import React from 'react';

// styles
import MessageText from './styles';

type Props = {
    text: string;
    type?: string;
};

const Message: React.FC<Props> = ({ text, type }: Props) => {
    return <MessageText type={type}>{text}</MessageText>;
};

export default Message;
