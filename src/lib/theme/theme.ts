import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
    },
    components: {
        MuiContainer: {
            defaultProps: {
                maxWidth: "lg",
            }
        }
    },
});

theme.shadows[1] = "0px 5px 22px lightgray";

export default theme;
