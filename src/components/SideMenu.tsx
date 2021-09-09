import React from 'react';
import {Button, IconButton, Typography} from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import {useHomeStyles} from "../pages/Home";

interface SideMenuProps {
    classes: ReturnType<typeof useHomeStyles>
}

export const SideMenu: React.FC<SideMenuProps> = ({classes}: SideMenuProps): React.ReactElement => {
    return (
        <ul className={classes.sideMenuList}>
            <li className={classes.sideMenuListItem}>
                <IconButton className={classes.logo} aria-label="" color="primary">
                    <TwitterIcon className={classes.logoIcon}  />
                </IconButton>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <SearchIcon className={classes.sideMenuListItemIcon} color="inherit" />
                    <Typography className={classes.sideMenuListItemLabel} variant='h6'>Поиск</Typography>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <NotificationsNoneIcon className={classes.sideMenuListItemIcon} />
                    <Typography className={classes.sideMenuListItemLabel} variant='h6'>Уведомление</Typography>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <MailOutlineIcon className={classes.sideMenuListItemIcon} />
                    <Typography className={classes.sideMenuListItemLabel} variant='h6'>Сообщения</Typography>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <BookmarkBorderIcon className={classes.sideMenuListItemIcon} />
                    <Typography className={classes.sideMenuListItemLabel} variant='h6'>Закладки</Typography>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <ListAltIcon className={classes.sideMenuListItemIcon} />
                    <Typography className={classes.sideMenuListItemLabel} variant='h6'>Список</Typography>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <PermIdentityIcon className={classes.sideMenuListItemIcon} />
                    <Typography className={classes.sideMenuListItemLabel} variant='h6'>Профиль</Typography>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <Button className={classes.sideMenuTweetButton} variant='contained' color='primary' fullWidth>Твитнуть</Button>
            </li>
        </ul>
    )
}

