import Qrcode from '../atoms/Qrcode';
// import Text72 from '../atoms/Text72';

const GuideQrcode = () => {
  return (
    <div className="flex flex-col gap-y-7">

      {/* 안내문구 */}
      <div className="relative flex w-[670px] h-[600px] rounded-[10px] bg-white/60 justify-center">
        <div className="flex flex-col absolute h-full text-center justify-center gap-y-8">
          <div>
            <span className="font-pyeongchang font-bold text-5xl text-purple">SongPicker</span>
            <span className="font-pyeongchang font-bold text-4xl text-white leading-[50px] whitespace-pre-line">{`가 \n 부르실 노래를 추천해드려요!`}</span>
          </div>

          {/* QR 코드 */}
          <div className="flex w-full justify-center">
            <Qrcode />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuideQrcode;
