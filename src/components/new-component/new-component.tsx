import React from 'react';

export interface NewComponentProps {
    className?: string;
}

export const NewComponent: React.FC<NewComponentProps> = ({ className = '' }) => (
    <div className={className}>NewComponent</div>
);