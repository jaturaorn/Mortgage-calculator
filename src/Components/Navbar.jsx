import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";

const Navbar = () => {
  return (
    // *TODO The Appbar component of Material UI is used for creating a top navigation bar in the user interface.
    <AppBar position="static">
      {/* Container component of Material UI is used for creating a container element 
      that can be used to create a responsive layout, and center and contain other elements in a user interface.  */}
      <Container maxWidth="xl">
        {/* Toolbar component can contain elements such as buttons, text, and icons, 
        and can also be used for creating a responsive layout that adapts to different screen sizes. */}
        <Toolbar>
          {/* typography component is used for applying pre-defined typographic styles to text elements. 
          It helps create a consistent and visually pleasing layout with customizable font family, size, weight and spacing. */}
          <Typography variant="h5">Bank of React</Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
