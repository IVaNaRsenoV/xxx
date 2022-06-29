import React from 'react';
import { v4 } from 'uuid';
import { useAppDispatch } from '../../redux/hooks';
import { add, deleteItems, inc, dec } from '../../redux/reducer/basketReducer';
import { postData } from '../../redux/reducer/postReducer';
import { deleteItem } from '../../redux/reducer/deleteReducer';
// import { Data } from './types/typeCard';
import { Image, Typography } from './Compounds';
import { Button } from '../Button';

interface XXX {
    id: number
    cost: number
    title: string
    img: string
}

type Data = {
    type: string
    data: XXX[]
}

export const Card: React.FC<Data> = ({ data, type }) => {

    const dispatch = useAppDispatch();

    const addToBasket = (id: number, img: string, title: string, cost: number ) => {
        dispatch(add({id, img, title, cost }))
        // dispatch(keySet(key));
        dispatch(inc());
        dispatch(postData({ id, cost, title, img }));
        // console.log(id, ' ', key);
        // console.log('selector addToBasket ', selector);
    }
    const deleteProduct = (id: number ) => {

        dispatch(deleteItems(id));
        dispatch(dec());
        dispatch(deleteItem(id));
        // console.log(id, ' ', key);
        // console.log('selector deleteProduct ', selector);
    }

    return (
        <div>
            {data.map(({id, img, title, cost}) => {
                    localStorage.setItem('test', v4());
                    let key = localStorage.getItem('test');

                    return (
                        <div key={key} >
                            <Image img={img}/>
                            <Typography title={title} cost={cost}/>
                            {
                                type === 'catalog' ?
                                    <Button info={'Add to the basket'} onClick={() => {
                                        addToBasket( id, img, title, cost )
                                    }} /> :
                                    <Button  info={'delete this product'} onClick={() => deleteProduct(id)} />
                            }
                        </div>
                    )
                })}
        </div>
    )
}
