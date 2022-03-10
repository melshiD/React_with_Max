import {React, Fragment} from 'react';
import Card from './Card';
import classes from './ErrorModal.module.css';
import Button from './Button';
import ReactDOM from 'react-dom';

const Backdrop = props => {
    return <div className={classes.backdrop} onClick={props.onClick} />;
};

const ModalOverlay = props => {
    return(
        <Card className={classes.modal}>
        <header className={classes.header}>
            <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
            <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
            <Button onClick={props.onClick}>Okay</Button>
        </footer>
    </Card>
    );
}

const ErrorModal = props => {
    return (
        <Fragment>
          {ReactDOM.createPortal(
            <Backdrop onClick={props.dismissModal}/>, 
            document.getElementById('backdrop-root')
          )}
          {ReactDOM.createPortal(<ModalOverlay 
                                  title={props.title}
                                  message={props.message}
                                  onClick={props.dismissModal}
                                  />,
                                  document.getElementById('overlay-root'))}
        </Fragment>
    )
};

export default ErrorModal;