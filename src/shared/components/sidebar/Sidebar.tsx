
import { Avatar, Divider, Drawer, Grid, Icon, List, ListItemButton, ListItemIcon, ListItemText, useMediaQuery, useTheme } from "@mui/material";
import { useDrawerContext } from "../../contexts";

interface Isidebar  {
    children: React.ReactNode;
}

export const Sidebar: React.FC<Isidebar> = ({children}) => {
  
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));

  const { isDrawerOpen, toggleDrawerOpen } = useDrawerContext();

  return (
    <>
      <Drawer open={isDrawerOpen} variant={ smDown ? "temporary" : "permanent"} onClose={toggleDrawerOpen}>
        <Grid width={theme.spacing(28)} height="100%" display="flex" flexDirection="column">
          <Grid width="100%" height={theme.spacing(20)} display="flex" alignItems="center" justifyContent="center" >
            <Avatar
              sx={{ height: theme.spacing(12), width: theme.spacing(12) }}
              alt="Gustavo" src="https://yt3.ggpht.com/yti/AGOGRCotzkqyX7js9p-ESUyT9cXkuDCXjjZrn5uYgJIJVw=s88-c-k-c0x00ffffff-no-rj" />
          </Grid>

          <Divider /> 
          <Grid flex={1}>
            <List component="nav">
              <ListItemButton>
                <ListItemIcon>
                  <Icon>home</Icon>
                  <ListItemText primary="Home Page" />
                </ListItemIcon>
              </ListItemButton>
            </List> 
          </Grid>

        </Grid>
      </Drawer>

      <Grid height="100vh" marginLeft={ smDown ? 0 : theme.spacing(28)}>
        {children}
      </Grid>
    </>
  );
};