import ChartName from '../molecules/ChartName';
import ChartCarousel from '../organisms/ChartCarousel';
import ChartData from '../shared/ChartData';
import LandingCharacter from '../assets/LandingCharacter.svg';
import Text36 from '../atoms/Text36';
import { ChartTemplateProps } from '../shared/Types';

const ChartTemplate = (props: ChartTemplateProps) => {
  return (
    <div className="relative w-full flex justify-center items-end">
      {/* 차트 */}
      <div className="relative rounded-box bg-black/80 h-5/6 mb-1 pt-3">
        <ChartCarousel data={ChartData} />

        {/* 이미지 */}
        <div className="absolute z-10 w-44 -top-24 -left-24 -rotate-12">
          <img src={LandingCharacter} />
        </div>

        {/* 차트 이름 */}
        <div className="absolute top-3 left-5">
          <ChartName text="SongPicker 추천차트" />
        </div>

        {/* 닫기 버튼 */}
        <div
          className="btn absolute w-28 h-16 top-3 right-5 bg-transparent border-2 text-[#80F9C6] hover:bg-ghost"
          onClick={() => {
            props.closeChart();
          }}
        >
          <Text36 text="닫기" />
        </div>
      </div>
    </div>
  );
};

export default ChartTemplate;
