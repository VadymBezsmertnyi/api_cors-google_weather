import { DiagramDailyType } from 'interface';
import { useEffect, useState } from 'react';

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

  return <>diagram</>;
};

export default FullInfoDiagram;
