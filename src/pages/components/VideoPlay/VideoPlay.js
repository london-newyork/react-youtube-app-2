import React from 'react';
import Youtube from 'react-youtube'
import Style from './VideoPlay.module.css'

export const VideoPlay = ({id}) => {
  return (
  <div className={Style.wrap}>
      <Youtube ClassName={Style.video} videoId={id} />
  </div>
  )
};
