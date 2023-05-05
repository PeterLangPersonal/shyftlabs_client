import * as React from 'react';

import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { useAppContext } from '../../../utils';
import { PageContext } from '../../../contexts';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const Success = () => {
    const { isAlertActive, setIsAlertActive } = useAppContext(PageContext);

    return(
        <Snackbar open={isAlertActive} autoHideDuration={3000} onClose={() => setIsAlertActive(false)}>
            <Alert onClose={() => setIsAlertActive(false)} severity="success" sx={{ width: '100%' }}>
                Success!
            </Alert>
        </Snackbar>
    );
}