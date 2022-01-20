import React, { useEffect } from 'react';
import { Layouts } from './components/Layouts/Layouts';
import { fetchPopularData } from '../apis';
import { Store } from '../store/index'
import { useContext } from 'react/cjs/react.production.min';

export const Top = () => {
    const { globalState, setGlobalState } = useContext(Store)

    useEffect(() => {
        fetchPopularData().then((res)=>{
            console.log('data',res);
            setGlobalState({type: 'SET_POPULAR', payload: {poplar: res.data.items}})
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
  return (
      <Layouts>
        top page
      </Layouts>
  )
};
