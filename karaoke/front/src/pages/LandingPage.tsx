import LandingCharacter from '../assets/LandingCharacter.svg';
import Button from '../molecules/Button';
import Text72 from '../atoms/Text72';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate()

  // 시작하기 버튼 클릭 시 이동
  const startKaraoke = () => {
    navigate('/paying')
  }

  return (
    <div className="w-full h-full">
      <div className="flex-c h-full content-center space-y-9">

        {/* 캐릭터 이미지 */}
        <div className="flex justify-center">
          <img src={LandingCharacter} />
        </div>
        
        {/* SSAFY 노래방 */}
        <div className="flex justify-center space-x-2">
          <span className="text-pink">
            <Text72 text="SSAFY" />
          </span>
          <span className="text-white">
            <Text72 text="노래방" />
          </span>
        </div>
        
        {/* 시작하기 버튼 */}
        <div className="flex justify-center">
          <Button text="시작하기" handleClick={startKaraoke} color='bg-gradient-to-r from-purple to-[#991571]'/>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
