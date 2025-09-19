import { DarkMode, LightMode } from "@mui/icons-material";
import {
  AppBar,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";

type Props = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};

export default function NavBar({ darkMode, toggleDarkMode }: Props) {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6">RE-STORE</Typography>
        <Tooltip
          title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          <IconButton onClick={toggleDarkMode}>
            {darkMode ? <DarkMode /> : <LightMode sx={{ color: "yellow" }} />}
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
}
