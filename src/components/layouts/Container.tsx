import React from 'react';

type ContainerProps = {
    children: React.ReactNode;
    className?: string
};

const Container: React.FC<ContainerProps> = (props) => {
    const { children, className } = props;
    return <div className={`container pt-5 ${className}`}>{children}</div>;
};

export default Container;
