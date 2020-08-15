import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Avatar from "../ui/Avatar";
import Paper from "@material-ui/core/Paper";
import profile from "../../images/barbara.jpg";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

//Icons
import LocationOnIcon from "@material-ui/icons/LocationOn";
import SchoolIcon from "@material-ui/icons/School";
import BuildIcon from "@material-ui/icons/Build";
import BookIcon from "@material-ui/icons/Book";
import CollectionsBookmarkIcon from "@material-ui/icons/CollectionsBookmark";
import SportsFootballIcon from "@material-ui/icons/SportsFootball";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  gridItem: {
    width: "70",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    backgroundColor: "green",
  },
  name: {
    marginTop: "20px",
    textAlign: "center",
  },
}));

export default function Profile() {
  const classes = useStyles();
  return (
    <main className={classes.root}>
      <Grid container direction="column" spacing={4} alignItems="center">
        {/* First Grid Item, name and profile picture*/}
        <Grid item style={{ width: "50%" }}>
          <Grid container>
            <Grid item>
              <Avatar profile={profile} />
            </Grid>
            <Grid item>
              <Typography component="h1" variant="h1">
                barabra adams
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        {/* Second grid item Location and Joining Date */}
        <Grid item style={{ width: "50%" }}>
          <Grid container justify="flex-start" spacing={10}>
            <Grid item>
              <Grid container>
                <Grid item>
                  <LocationOnIcon />
                </Grid>
                <Grid item>
                  <Typography> Green Bay, Wisconsin </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Typography> Joineed May, 2020</Typography>
            </Grid>
          </Grid>
        </Grid>

        {/* Third grid item, School and degree */}
        <Grid item style={{ width: "50%" }}>
          <Grid container justify="flex-start" spacing={10}>
            <Grid item>
              <Grid container>
                <Grid item>
                  <SchoolIcon />
                </Grid>
                <Grid item>
                  <Typography> University of Green Bay, Wisconsin </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Typography> Computer Science </Typography>
            </Grid>
          </Grid>
        </Grid>

        {/* Fourth Grid item, bio */}
        <Grid item style={{ width: "50%" }}>
          <Typography variant="body1" component="article">
            jsckndscbshbvchsbvhfdbhvbshdfhjbhbdsv dcdhbchdbchdbhcbdhbchdbcd
            hfbhvbhdfbv hfdbhvbdfv hdfbvhdfbvd vhbfhdhbvd JDCSHBDCHBSDHBCHSDBCHSBDC
            SDCSHBCHSDBHBCBHBSDCHSBDCHBSDJBCS
          </Typography>
        </Grid>

        {/* Fifthy Grid Item Skills, Classes, hobbies, and Books */}
        <Grid item container style={{ width: "50%" }} spacing={1}>
          <Grid item xs={3}>
            <Card>
              <CardHeader
                title="COURSES"
                avatar={<CollectionsBookmarkIcon />}
              />
              <Divider />
              <CardContent>
                <List>
                  <ListItem>
                    <ListItemText> React JS</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText> React JS</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText> React JS</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText> React JS</ListItemText>
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={3}>
            <Card>
              <CardHeader title="BOOKS" avatar={<BookIcon />} />
              <Divider />
              <CardContent>
                <List>
                  <ListItem>
                    <ListItemText> React JS</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText> React JS</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText> React JS</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText> React JS</ListItemText>
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={3}>
            <Card>
              <CardHeader title="SKILLS" avatar={<BuildIcon />} />
              <Divider />
              <CardContent>
                <List>
                  <ListItem>
                    <ListItemText> React JS</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText> React JS</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText> React JS</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText> React JS</ListItemText>
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={3}>
            <Card>
              <CardHeader title="HOBBIES" avatar={<SportsFootballIcon />} />
              <Divider />
              <CardContent>
                <List>
                  <ListItem>
                    <ListItemText> React JS</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText> React JS</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText> React JS</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText> React JS</ListItemText>
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/*Sixthy Grid Item */}
        <Grid item container style={{ width: "50%" }} justify="center">
          <Grid item>
            <Typography variant="h4" component="h5">
              The Most Important Thing in the world is family
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </main>
  );
}
