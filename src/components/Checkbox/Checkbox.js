import React from "react";
import clsx from 'clsx';
import { Checkbox, withStyles } from "@material-ui/core";
import FormControlLabel from '@material-ui/core/FormControlLabel';

import './Checkbox.scss';

const CustomCheckbox = withStyles((theme) => ({
    root: {
        '&:hover': {
            backgroundColor: 'transparent',
        },
    },
    icon: {
        borderRadius: 50,
        width: 20,
        height: 20,
        display: 'flex',
        backgroundColor: '#FFFFFF',
        border: '1px solid rgba(165, 171, 189, 0.4)',
        'input:hover ~ &': {
            backgroundColor: '#FFFFFF',
        }
    },
    checkedIcon: {
        display: 'flex',
        // backgroundImage: 'linear-gradient(270deg, #00BED8 0%, #1976d2 100%)',
        backgroundImage: 'linear-gradient(270deg, #1976d2 0%, #1976d2 100%)',
        opacity: 1,
        // border: 'none',
        '&:before': {
            display: 'block',
            left: 0,
            right: 0,
            margin: 'auto',
            width: 16,
            height: 16,
            backgroundImage:
                "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
                " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
                "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23FFFF'/%3E%3C/svg%3E\")",
            content: '""',
        },
        'input:hover ~ &': {
            backgroundColor: 'transparent',
        },
    },
}))(({ classes, ...props }) => {
    return (
        <Checkbox
            className={classes.root}
            disableRipple
            color="default"
            checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
            icon={<span className={classes.icon} />}
            inputProps={{ 'aria-label': 'decorative checkbox' }}
            {...props}
        />
    )
});


export default function CheckboxCustom(props) {
    return (
        <div className={`checkbox ${props.errMsg && 'has-error'}`} style={props.containerStyle}>
            <FormControlLabel
                control={<CustomCheckbox name="checkedItem" {...props.checkboxProps} />}
                label={props.label}
            />

            {
                props.errMsg &&
                <div className={'err-msg'}>
                    <span>{props.errMsg}</span>
                </div>
            }

        </div>
    )
}
