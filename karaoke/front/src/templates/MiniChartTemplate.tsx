import ChartName from '../molecules/ChartName';
import ChartCarousel from '../organisms/ChartCarousel';
import ChartData from '../shared/ChartData';
import { ChartTemplateProps } from '../shared/Types';

const MiniChartTemplate = (props: ChartTemplateProps) => {
  return (
    <div className="relative top-24 w-full flex justify-center pointer-events-none">
      {/* 차트 */}
      <div className="relative  bg-black/80 h-1/2 mb-1 p-6 overflow-hidden pointer-events-auto">
        <ChartCarousel data={ChartData} />

        {/* 차트 이름 */}
        <div className="absolute top-3 left-5">
          <ChartName text={props.chartName} />
        </div>

      </div>
    </div>
  );
};

export default MiniChartTemplate;
