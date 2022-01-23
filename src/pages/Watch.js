import React,{ useEffect, useContext } from 'react';
import { Layouts } from './components/Layouts/Layouts';
import { VideoDetail } from './components/VideoDetail/VideoDetail';
import { Store } from '../store/index'
import { useLocation } from 'react-router-dom'
import { fetchRelatedData, fetchSelectedData } from '../apis';

export const Watch = () => {
  const { setGlobalState } = useContext(Store)
  const location = useLocation()
  const setVideos = async () => {
    const searchParams = new URLSearchParams(location.search)
    const id = searchParams.get('v')
    if (id) {
      const [selected, related] = await Promise.all([fetchSelectedData(id), fetchRelatedData(id)])
      setGlobalState({type: 'SET_SELECTED', payload: {selected: selected.items.shift()}})
      setGlobalState({type: 'SET_RELATED', payload: {related: related.items}})
    }
  }

  useEffect(() => {
    setVideos()

  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[location.search])
  return (
  <div>
      <Layouts>
        <VideoDetail />
      </Layouts>
  </div>
  )
};
