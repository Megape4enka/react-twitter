import React from 'react';
import {
    Container,
    createStyles,
    Grid,
    InputBase,
    makeStyles,
    Paper, Theme,
    Typography, withStyles
} from "@material-ui/core";
import grey from '@material-ui/core/colors/grey'
import {Tweet} from "../components/Tweet";
import {SideMenu} from "../components/SideMenu";

export const useHomeStyles = makeStyles((theme: Theme) => ({
    wrapper: {
        height: '100vh',
    },
    logo: {
        margin: '10px 0'
    },
    logoIcon: {
        fontSize: 36,
    },
    sideMenuList: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
        width: 230,
    },
    sideMenuListItem: {
        cursor: 'pointer',
        '&:hover': {
            '& div': {
                backgroundColor: 'rgba(29, 161, 242, 0.1)',
                '& h6': {
                    color: theme.palette.primary.main
                },
                '& svg path': {
                    fill: theme.palette.primary.main
                },
            },
        },
        '& div': {
            display: 'inline-flex',
            position: 'relative',
            alignItems: 'center',
            padding: '0 25px 0 20px',
            borderRadius: 30,
            marginBottom: 15,
            height: 50,
            transition: 'background-color 0.1s ease-in-out'
        }
    },
    sideMenuListItemLabel: {
        fontWeight: 700,
        fontSize: 20,
        marginLeft: 15
    },
    sideMenuListItemIcon: {
        fontSize: 32,
        marginLeft: -5,
    },
    tweetsWrapper: {
        borderRadius: 0,
        height: '100%',
        borderTop: '0',
        borderBottom: '0'
    },
    sideMenuTweetButton: {
        marginTop: theme.spacing(3.2),
        padding: theme.spacing(3),
    },
    tweetHeader: {
        borderTop: '0',
        borderLeft: '0',
        borderRight: '0',
        borderRadius: 0,
        padding: '10px 15px',
        '&:h6': {
            fontWeight: 800,
        },
    },
    tweet: {
        cursor: 'pointer',
        paddingTop: 15,
        paddingLeft: 20,
          '&:hover': {
              backgroundColor: 'rgb(245, 248, 250)',
          }
    },
    tweetAvatar: {
        width: theme.spacing(5),
        height: theme.spacing(5),
    },
    tweetFooter: {
        display: 'flex',
        justifyContent: 'space-between',
        position: 'relative',
        width: 450,
        left: -13,
    },
    tweetUserName: {
        color: grey[500]
    },
}))

const SearchTextField = withStyles(() =>
    createStyles({
        input: {
            borderRadius: 30,
            backgroundColor: '#E6ECF0',
            height: 45,
            padding: 0,
        },
    }),
)(InputBase)

export const Home = () => {
    const classes = useHomeStyles()

    return (
        <Container className={classes.wrapper} maxWidth='lg'>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <SideMenu classes={classes} />
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.tweetsWrapper} variant="outlined">
                        <Paper className={classes.tweetHeader} variant="outlined">
                            <Typography variant='h6'>Главная</Typography>
                        </Paper>
                        {[
                            ...new Array(20).fill(
                                <Tweet text='После опроса в ТГ, сделал вывод, что нужно пилить в курсе и вёрстку тоже. Соответственно, в начале курса мы будем разрабатывать визуальную часть, а именно разрабатывать верстку с помощью Material UI и постепенно подключать функциональность'
                                       classes={classes}
                                       user={{
                                           fullname: 'Grani Luisa',
                                           username: 'granilui',
                                           avatarUrl: 'https://images.unsplash.com/photo-1563306406-e66174fa3787?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
                                       }}
                                />
                            )
                        ]}
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <SearchTextField placeholder="Поиск по твиттеру" fullWidth />
                </Grid>
            </Grid>
        </Container>
    )
}