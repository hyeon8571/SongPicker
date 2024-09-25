import { useLocation } from 'react-router-dom';
import Video from '../organisms/Video';
import Novideo from "../assets/NoVideo.svg"
import SmileCharacter from "../assets/SmileCharacter.svg"
import LandingCharacter from "../assets/LandingCharacter.svg"

import { useState } from 'react';
import Text60 from '../atoms/Text60';

const KaraokeVideoPage = () => {
  const state = useLocation();
  const [isVisible, setIsVisible] = useState(true);

  const handleError = (error: number) => {
    if (error === 150) {
      setIsVisible(false);
    }
  };

  return (
    <div className="relative flex w-full h-full">
      <img src={SmileCharacter} alt="" className='absolute w-64 top-[-40px] left-8 animate-glow'/>
      <img src={LandingCharacter} alt="" className='absolute w-64 top-[-40px] right-8 animate-glow'/>
      <div className='flex w-full h-full justify-center items-center'>
      {isVisible ? (
        <Video videoId={state.state.id.videoId} handleError={handleError} />
      ) : (
        <div className='flex flex-col w-full items-center font-pyeongchang font-bold text-white gap-10'>
          <img src={Novideo} className='w-96 motion-safe:animate-bounce' style={{animationDuration: '2.5s'}}/>
          <Text60 text='노래가 나오는 중입니다💃'/>
        </div>
      )}
      </div>
      
    </div>
  );
};

export default KaraokeVideoPage;
