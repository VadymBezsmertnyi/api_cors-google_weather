import { Box, Typography } from '@mui/material';
import clsx from 'clsx';

import useStyles from './CustomOtherInfo.styles';

interface ICustomOtherInfoProps {
  nameTypeInfo: string;
  valueTypeInfo: string | number;
  space?: Boolean;
  symbolNameTypeInfo: string;
  stateStyle: string;
  styleMarker?: string;
  icon?: string;
}

const CustomOtherInfo = ({
  nameTypeInfo,
  valueTypeInfo,
  space = false,
  symbolNameTypeInfo,
  stateStyle,
  styleMarker = '',
  icon = '',
}: ICustomOtherInfoProps) => {
  const classes = useStyles();
  const addSpace = space && ` `;

  return (
    <Typography component={'span'} className={clsx(stateStyle)}>
      {nameTypeInfo} &nbsp;
      <Typography className={clsx(stateStyle, styleMarker)}>
        {valueTypeInfo}
        {addSpace}
        {symbolNameTypeInfo === 'icon' ? (
          <Box component="img" src={icon} className={classes.iconInHeavy} />
        ) : (
          symbolNameTypeInfo
        )}
      </Typography>
    </Typography>
  );
};

export default CustomOtherInfo;
