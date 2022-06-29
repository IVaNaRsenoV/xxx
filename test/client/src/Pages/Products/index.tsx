import React from 'react';
import { v4 } from 'uuid';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { fetchData } from '../../redux/reducer/fetchReducer';
import { getKey } from '../../redux/reducer/firstReducer';

import { Card } from '../../components';

export const Products: React.FC = () => {
    const dispatch = useAppDispatch();
    const data = useAppSelector(state => state.secondReducer);
    const basket = useAppSelector(state => state.basketReducer);

    const [ test, setTest ] = React.useState<string>('default');

    React.useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    React.useEffect(() => {
        console.log('render');
        setTest(v4());
    }, [basket]);

    React.useEffect(() => {
        console.log(test);
        dispatch(getKey(test));
    }, [test])

    return (
        <div>
            Products
            <div style={{ display: 'flex' }}>
                <Card data={data.data} type={data.type} />
                <Card data={basket.data} type={basket.type}/>
            </div>
        </div>
    )
}