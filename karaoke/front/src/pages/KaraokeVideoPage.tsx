import { useLocation } from 'react-router-dom';
import Video from '../organisms/Video';
import Novideo from '../assets/NoVideo.svg';
import SmileCharacter from '../assets/SmileCharacter.svg';
import LandingCharacter from '../assets/LandingCharacter.svg';

import { useState } from 'react';
import Text60 from '../atoms/Text60';

const KaraokeVideoPage = () => {
  const state = useLocation();
  const [isVisible, setIsVisible] = useState(true);

  // 비디오 검색 안될 때
  const handleError = (error: number) => {
    if (error === 150) {
      setIsVisible(false);
    }
  };


  return (
    <div className="relative flex w-full h-full">
      {/* 미러볼 2개 */}
      <img src={SmileCharacter} className="absolute w-64 top-[-40px] left-8 animate-glow" />
      <img src={LandingCharacter} className="absolute w-64 top-[-40px] right-8 animate-glow" />

      {/* 비디오 */}
      <div className="flex flex-col w-full h-full justify-center items-center gap-3">
        {/* 상단 버튼 */}
        <div className="flex relative gap-8">

          {/* 추천 차트 버튼 */}


          {/* 예약 목록 버튼 */}

        </div>

        <div className="flex gap-5"></div>
        {isVisible ? (
          <Video videoId={state.state.id.videoId} handleError={handleError} />
        ) : (
          <div className="flex w-11/12 h-5/6 justify-center items-center font-pyeongchang font-bold text-white ">
            <div className="flex flex-col w-full items-center">
              <img
                src={Novideo}
                className="w-96 motion-safe:animate-bounce"
                style={{ animationDuration: '2.5s' }}
              />
              <Text60 text="노래가 나오는 중입니다💃" />
            </div>
          </div>
        )}
      </div>

      {/* 미니 차트 */}
    </div>
  );
};

export default KaraokeVideoPage;
