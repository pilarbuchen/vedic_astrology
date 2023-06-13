import React from 'react';

export interface TimepickerProps {
    className?: string;
}

export const Timepicker: React.FC<TimepickerProps> = ({ className = '' }) => (
    <div className={className}>Timepicker</div>
);