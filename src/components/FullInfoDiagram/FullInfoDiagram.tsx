import { DiagramDailyType } from 'interface';
import { useEffect, useState } from 'react';
import {
  XYPlot,
  VerticalGridLines,
  VerticalBarSeries,
  BarSeries,
  LabelSeries,
  HorizontalGridLines,
  XAxis,
  YAxis,
} from 'react-vis';

interface IFullInfoDiagramProps {
  diagram: DiagramDailyType[];
  place_id: string;
  colorDiagram: string;
}

const FullInfoDiagram = ({
  diagram,
  place_id,
  colorDiagram,
}: IFullInfoDiagramProps) => {
  const [widthNow, setWidthNow] = useState(1000);

  useEffect(() => {
    setWidthNow(window.innerWidth - 50);
  }, [window]);

  const data = diagram?.map(({ day, temp }) => {
    return { x: day, y: temp };
  });

  return (
    data?.length && (
      <XYPlot
        animation
        xType="ordinal"
        width={widthNow}
        height={800}
        xDistance={100}
      >
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <VerticalBarSeries
          sx={{ background: 'red' }}
          className="vertical-bar-series-example"
          data={data}
        />
        <LabelSeries data={data} getLabel={(d) => `${d.y}°C`} />
      </XYPlot>
    )
  );
};

export default FullInfoDiagram;
