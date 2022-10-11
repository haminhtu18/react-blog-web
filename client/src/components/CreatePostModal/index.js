import React from "react";
import FileBase64 from 'react-file-base64'
import { Button, Modal, TextareaAutosize, TextField } from "@mui/material"
import { useSelector, useDispatch } from "react-redux";
import { modalState$ } from '../../redux/selectors'
import  useStyles  from "./styles";
import { hideModal } from "../../redux/actions";

export default function CreatePostModal() {
    const dispatch = useDispatch();
    const { isShow } = useSelector(modalState$)
    const classes = useStyles();

    const onClose = React.useCallback(()=> {
        dispatch(hideModal())
    }, [dispatch]);

    console.log({ isShow });

    const body = <div className={classes.paper} id="simple-modal-title">
        <h2>Create New Post</h2>
        <form noValidate autoComplete="off" className={classes.form}>
            <TextField 
            className={classes.title}
            required
            Label ='Title'
            value=""
            />
            <TextareaAutosize
            className={classes.textarea}
            rawsMin={10}
            rawsMax={15}
            placeholder='Content...'
            value=""
            />
            <FileBase64 accept='image/*' multiple={false} type= 'file' />
            <div className={classes.footer} >
                <Button 
                variant="contained" 
                color="primary" 
                component ='span' 
                fullWidth>
                    Create 
                </Button>
             </div>

        </form>
    </div>

    return <Modal open={isShow} onClose = {onClose}>
        {body}
    </Modal>
}