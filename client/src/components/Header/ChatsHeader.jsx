import { Link } from "react-router-dom";

// Material
import { Avatar, IconButton, Stack, Typography } from "@mui/material";

// Icons
import { Menu } from "@mui/icons-material";
export default function ChatsHeader() {
  return (
    <Stack
      height="8vh"
      bgcolor="background.paper"
      //   px={{ xs: 1, sm: 3 }}
      px={2}
      py={1}
      direction="row"
      alignItems="center"
      justifyContent="space-between"
    >
      <Stack direction="row" spacing={2}>
        {/* <Logo variant="letter" /> */}
        <Typography variant="h6" noWrap component="div">
          WhatsApp
        </Typography>
      </Stack>

      <Stack direction="row" alignItems="center" spacing={2}>
        <Link to="/">
          <Avatar
            sx={{ width: 32, height: 32 }}
            src="https://yt3.ggpht.com/fBDwKLnIlj1PP4JWZQg7bX0K_hyJJtqzG85FHQusBF4neM5KhPt7kpChjDK88lbAHAj35vgFvg=s88-c-k-c0x00ffffff-no-rj-mo"
          />
        </Link>
      </Stack>
    </Stack>
  );
}
