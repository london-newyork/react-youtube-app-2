import React, { useEffect, useContext } from 'react';
import { Layouts } from './components/Layouts/Layouts';
import { fetchPopularData } from '../apis/index';
import { Store } from '../store/index'
import { VideoGrid } from '../pages/components/VideoGrid/VideoGrid'
import { VideoGridItem } from '../pages/components/VideoGridItem/VideoGridItem'

export const Top = () => {
    const { globalState, setGlobalState } = useContext(Store)

    useEffect(() => {
        fetchPopularData().then((res)=>{
            console.log('data',res)
            setGlobalState({type: 'SET_POPULAR', payload: {popular: res.data.items}})
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
        <Layouts>
          <VideoGrid>
            {
              globalState.popular && globalState.popular.map((popular) => {
                return (
                  <VideoGridItem
                    id={popular.id}
                    key={popular.id}
                    src={popular.snippet.thumbnails.medium.url}
                    title={popular.snippet.title} />
                )
              })
            }
          </VideoGrid>
        </Layouts>
    )
};
