import { DiagramDailyType } from 'interface';
import { useEffect, useState } from 'react';
import { Area, AreaChart, LabelList, XAxis } from 'recharts';

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

  return (
    <AreaChart
      width={widthNow}
      height={widthNow * 0.3}
      data={diagram}
      margin={{ top: 18, right: -15, left: -15, bottom: 0 }}
    >
      <defs>
        <linearGradient id={`colorUv_${place_id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="40%" stopColor={colorDiagram} stopOpacity={0.8} />
          <stop offset="100%" stopColor={colorDiagram} stopOpacity={0} />
        </linearGradient>
      </defs>
      <XAxis
        dataKey="day"
        tickLine={false}
        axisLine={false}
        minTickGap={1}
        style={{
          font: 'normal normal normal 16px Jost',
          opacity: '0.5',
        }}
        allowDataOverflow={true}
      />
      <Area
        type="monotone"
        dataKey="temp"
        stroke="#fffaf100"
        fillOpacity={0.5}
        fill={`url(#colorUv_${place_id})`}
      >
        <LabelList
          dataKey="temp"
          position="top"
          style={{
            font: 'normal normal normal 12px Jost',
            color: 'black',
            opacity: '0.5',
          }}
        />
      </Area>
    </AreaChart>
  );
};

export default FullInfoDiagram;
