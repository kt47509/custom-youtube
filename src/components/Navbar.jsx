import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{ position: 'sticky', background: "#000", top: 0, justifyContent: 'space-between' }}
  >
    <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
      <Typography variant="h4" color="#fff" fontWeight="bold">Custom Tube
      </Typography>
    </Link>
    <SearchBar></SearchBar>
  </Stack>
)


export default Navbar