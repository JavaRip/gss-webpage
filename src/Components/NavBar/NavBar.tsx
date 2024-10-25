import AppBar from '@mui/material/AppBar'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Drawer from '@mui/material/Drawer'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import { useState } from 'react'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'
import ListItemIcon from '@mui/material/ListItemIcon'
import { SvgIconComponent } from '@mui/icons-material'
import ListItemButton from '@mui/material/ListItemButton'
import InfoIcon from '@mui/icons-material/Info';
import PublicIcon from '@mui/icons-material/Public';
import ConstructionIcon from '@mui/icons-material/Construction';
import CallIcon from '@mui/icons-material/Call';
import BannerAbbreviated from '../../assets/banner_abbreviated.svg?react'

function NavListItem(
    { path, text, Icon }: {
        path: string;
        text: string;
        Icon: SvgIconComponent;
    }
): JSX.Element {
    return (
        <ListItem key={path}>
            <ListItemButton>
                <ListItemIcon>
                    <Icon />
                </ListItemIcon>
                <ListItemText primary={text} />
            </ListItemButton>
        </ListItem>
    );
}

function TextLink({ children }: { children: string }): JSX.Element {
    return (
        <Typography
            sx={{
                position: 'relative',
                display: 'inline-block',
                color: 'white',
                cursor: 'pointer',
                textDecoration: 'none',
                fontWeight: 'bold',
                '&::after': {
                    content: '""',
                    position: 'absolute',
                    width: '100%',
                    height: '2px',
                    backgroundColor: 'white',
                    bottom: '-4px',
                    left: 0,
                    transform: 'scaleX(0)',
                    transformOrigin: 'center',
                    transition: 'transform 0.3s ease',
                },
                '&:hover::after': {
                    transform: 'scaleX(1)',
                },
            }}
            variant='h5'
        >
            {children}
        </Typography>
    );
}

export default function NavBar(): JSX.Element {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    return (
        <AppBar
            sx={{
                height: isSmallScreen ? '5rem' : '12rem',
                borderBottom: isSmallScreen ?
                    '' : '8px solid rgba(192, 52, 166)',

            }}
            position='absolute'
        >
            <Stack
                alignItems='center'
                direction='row'
                justifyContent='space-between'
                margin='auto'
                maxWidth='100em'
                paddingLeft='2rem'
                paddingRight='2rem'
                width='100%'
            >
                {isSmallScreen ? (
                    <>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            onClick={handleDrawerToggle}
                        >
                            <MenuIcon fontSize="large" />
                        </IconButton>
                        <Drawer
                            anchor="left"
                            open={drawerOpen}
                            onClose={handleDrawerToggle}
                        >
                            <Box sx={{ width: 250 }} onClick={handleDrawerToggle}>
                                <NavListItem
                                    path='/'
                                    text='Home'
                                    Icon={PublicIcon}
                                />
                                <NavListItem
                                    path='/'
                                    text='Services'
                                    Icon={ConstructionIcon}
                                />
                                <NavListItem
                                    path='/'
                                    text='About'
                                    Icon={InfoIcon}
                                />
                                <NavListItem
                                    path='/'
                                    text='Contact'
                                    Icon={CallIcon}
                                />
                            </Box>
                        </Drawer>
                        <Box sx={{ cursor: 'pointer' }}>
                            <img
                                alt='logo'
                                src='banner_abberviated.svg'
                                style={{
                                    height: '4rem',
                                    filter: 'invert(99%) sepia(24%) saturate(49%) hue-rotate(206deg) brightness(114%) contrast(92%)',
                                }}
                            />
                        </Box>
                    </>
                ) : (
                    <Stack
                        alignItems='center'
                        direction='row'
                        gap='4rem'
                        justifyContent='space-around'
                        width='100%'
                    >
                        <Box sx={{ cursor: 'pointer' }}>
                            <BannerAbbreviated
                                height='100%'
                                width='12rem'
                            />
                        </Box>

                        <Box sx={{
                            backgroundColor: 'rgba(192, 52, 166)',
                            borderRadius: '1rem',
                            padding: '1rem',
                        }}>
                            <TextLink>Services</TextLink>
                        </Box>

                        <TextLink>About</TextLink>
                        <TextLink>Contact</TextLink>
                    </Stack>
                )}
            </Stack>
        </AppBar>
    );
}
