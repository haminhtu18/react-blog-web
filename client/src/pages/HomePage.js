import React from "react";
import { Container, Fab } from '@mui/material';
import Header from "../components/Header";
import PostList from "../components/PostList";
import AddIcon from '@mui/icons-material/Add'
import useStyles from './styles'
import { useDispatch } from "react-redux";
import { showModal } from "../redux/actions";
import CreatePostModal from "../components/CreatePostModal";


export default function HomePage() {

    const dispatch = useDispatch();
    const classes = useStyles();

    const openCreatePostModal = React.useCallback(() => {
        dispatch(showModal())
    }, [dispatch])

    return <Container maxWidth = "lg" >
        <Header /> 
        <PostList /> 
        <CreatePostModal />
        <Fab color='primary' className = {classes.fab} onClick={openCreatePostModal}>
            <AddIcon />
        </Fab>   
    </Container>;
    
}