import React from 'react';
import { useAppSelector } from '../../redux/hooks';

export const BasketIcon: React.FC = () => {

    const count = useAppSelector(state => state.basketReducer.quantity);

    return (
        <div>{count}</div>
    )
}