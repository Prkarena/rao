import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

 const PostCreatorMaterialUi = (props) => { 
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

  let template = null;
  //switch case for our post : image, video or document
  switch (props.data.type) {
  case 1 : 
      console.log(props.action)
      if(props.action === 'posts'){
        template = (
                <div className={classes.post_content_image}
                    style ={{
                        background : `url(../images/articles/${props.data.data})`
                    }}>
                </div>
          )    // case 1 means image post
      }else if(props.action === 'events'){
          template = (
                  <div className={classes.post_content_image}
                      style ={{
                          background : `url(../images/events/${props.data.data})`
                      }}>
                  </div>
            )    // case 1 means image post
      }
      break;
  case 2 :  template = (
          <div className="post_content_video">
              <div className="embed-responsive embed-responsive-16by9">      
                  <iframe width="560" height="315" src={props.data.data}  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" title={props.data.title}></iframe>
              </div>
          </div>
        )   // case 2 means video post 
        break;
  case 3 :  template = (
              <div className={classes.post_pdf}
                  style ={{
                      background : `url(../images/pdf.png)`
                  }}>
              </div>
        ) // case 3 means document post
      break;
  default : return;
  }
  // it hendle expand button    
  const handleExpandClick = () => {
    setExpanded(!expanded);
  }

  return (
    <Card className={classes.card}>
      {/* Posted by image, title and subtitl */}
      <CardHeader
        avatar={
               <Avatar alt="Remy Sharp" src="../images/articles/1.jpeg" className={classes.bigAvatar} />
        }
        action={
          <IconButton aria-label="Settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.data.title}
        subheader={props.data.date}
      />
      {/* Post : image, video or document */}
         {template}
      {/* Post discription */}     
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
             {props.data.description} 
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="Share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="Show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
             {props.data.description}
          </Typography>
          <Typography paragraph>
            {props.data.description}
          </Typography>
          <Typography paragraph>
            {props.data.description}
          </Typography>
          <Typography>
            {props.data.description}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
//Style for Post Card 
const useStyles = makeStyles(theme => ({
    card: {
      maxWidth: 380,
      margin : 20,
      marginTop : 20,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
        margin: 10,
        width: 60,
        height: 60,
    },
    post_pdf: {
      backgroundSize: 'cover !important',
      width: 70,
      height: 70,
    },
    post_content_image: {
      backgroundSize: 'cover !important',
      backgroundRepeat: 'noRepeat',
      width: '100%',
      height: 220,
  },  
  }));
  
export default PostCreatorMaterialUi;