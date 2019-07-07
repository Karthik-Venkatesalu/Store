const drawerWidth = 60;
const appBarHeight = 54;

export const Styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    height: appBarHeight,
    backgroundColor: '#fff',
    boxShadow: "0 1px 0 0 rgba(0,0,0,0.1);",
    color: '#3B78BD',
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: 'bold',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    height: appBarHeight,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#194880',
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#113765',
    height: appBarHeight
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
  list: {
    marginTop: -8
  },
  menuItem: {
    height: 54,
  },
  selectedMenuItem: {
    height: 54,
    backgroundColor: '#30629E !important',
  },
  uploadDialoguedrawer: {
    opacity: 0.4,
    width: drawerWidth,
    flexShrink: 0,
    height: appBarHeight,
  }
});