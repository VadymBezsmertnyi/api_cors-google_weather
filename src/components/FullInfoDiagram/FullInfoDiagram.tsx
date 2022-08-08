import { Box } from '@mui/material';
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
  }, [widthNow]);

  console.log({
    diagram,
    place_id,
    colorDiagram,
  });

  return <Box>DIAGRAM</Box>;
};

export default FullInfoDiagram;
