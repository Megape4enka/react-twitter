import React from 'react';
import {Avatar, Grid, IconButton, Paper, Typography} from "@material-ui/core";
import classNames from "classnames";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ReplyIcon from "@material-ui/icons/Reply";
import {useHomeStyles} from "../pages/Home";

interface TweetProps {
    text: string;
    classes: ReturnType<typeof useHomeStyles>;
    user: {
        fullname: string;
        username: string;
        avatarUrl: string;
    }
}

export const Tweet: React.FC<TweetProps> = ({text, user, classes}: TweetProps): React.ReactElement => {
    return (
        <Paper className={classNames(classes.tweet, classes.tweetHeader)} variant="outlined">
            <Grid container spacing={3}>
                <Grid item xs={2}>
                    <Avatar className={classes.tweetAvatar} alt={`Аватарка пользователя ${user.fullname}`} src={user.avatarUrl} />
                </Grid>
                <Grid item xs={10}>
                    <Typography>
                        <b>{user.fullname}</b>&nbsp;
                        <span className={classes.tweetUserName}>@{user.fullname}</span>&nbsp;
                        <span className={classes.tweetUserName}>·</span>&nbsp;
                        <span className={classes.tweetUserName}>1 ч</span>
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        {text}
                    </Typography>
                    <div className={classes.tweetFooter}>
                        <div>
                            <IconButton color='primary'>
                                <ChatBubbleOutlineIcon style={{fontSize: 20}} />
                            </IconButton>
                            <span>1</span>
                        </div>
                        <div>
                            <IconButton color='primary'>
                                <RepeatIcon style={{fontSize: 20}} />
                            </IconButton>
                        </div>
                        <div>
                            <IconButton color='primary'>
                                <FavoriteBorderIcon style={{fontSize: 20}} />
                            </IconButton>
                        </div>
                        <div>
                            <IconButton color='primary'>
                                <ReplyIcon style={{fontSize: 20}} />
                            </IconButton>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </Paper>
    )
}