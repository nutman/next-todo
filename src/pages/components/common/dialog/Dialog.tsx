import React, { forwardRef, useImperativeHandle } from 'react';
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from '@material-tailwind/react';
import styles from '@/styles/signup.module.css';

const DialogDefault = forwardRef(function DialogDefault({}, ref) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  function handle() {
    handleOpen();
  }

  useImperativeHandle(ref, () => ({
    handleOpen: handle,
  }));

  return (
    <>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader className="text-center block">Validation passed</DialogHeader>
        <DialogBody className="text-center">
          <a href="https://github.com/nutman/next-todo" target="_blank">Link to repo</a>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className={' mr-5 hover:bg-transparent active:bg-transparent'}
          >
            <span>Cancel</span>
          </Button>
          <Button
            className={styles.signUpButton + ' m-0'}
            type={'submit'}
            onClick={handleOpen}
          >
            <span>Confirm</span>
          </Button>

        </DialogFooter>
      </Dialog>
    </>
  );
});

export default DialogDefault;
