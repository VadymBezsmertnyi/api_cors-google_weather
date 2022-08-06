import { Box } from '@mui/material';
import { FullInfoDiagram } from 'components';

import useStyles from './FullInfo.styles';

const FullInfo = () => {
  const classes = useStyles();

  return (
    <Box>
      FULL INFO
      <FullInfoDiagram />
    </Box>
  );
};

export default FullInfo;
