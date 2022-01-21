import React, { useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom'
import { Store } from '../../../store/index'
import {fetchSelectedData } from '../../../apis/index'
import { VideoPlay } from '../VideoPlay/VideoPlay';
import Style from '../VideoDetail/VideoDetail.module.css'

export const VideoDetail = () => {
  const { globalState, setGlobalState } = useContext(Store)
  const location = useLocation()
  const setSelectedVideo = async() => {
    const searchParams = new URLSearchParams(location.search)
    const id = searchParams.get('v')
    await fetchSelectedData(id).then((res)=> {
      const item = res.data.items.shift()
      setGlobalState({ type: 'SET_SELECTED', payload: {selected: item}})
      console.log('res', res);
    })
  }
  useEffect(() => {
    setSelectedVideo()
// eslint-disable-next-line react-hooks/exhaustive-deps
},[])
return globalState.selected ? (
<div className={Style.wrap}>
  <VideoPlay id={globalState.selected.id} />
  <p>{globalState.selected.snippet.title}</p>
  <hr />
  <pre>{globalState.selected.snippet.description}</pre>
</div>) : (<span>no data</span>)
}

