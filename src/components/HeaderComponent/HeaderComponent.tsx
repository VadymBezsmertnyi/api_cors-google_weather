import { Box } from "@mui/material";
import { EnterCity } from 'components';

import useStyles from "./HeaderComponent.styles";

const HeaderComponent = () => {
    const classes = useStyles();

    return (
        <Box id="header" component='header'>
            <EnterCity />
        </Box>
    );
}

export default HeaderComponent;
