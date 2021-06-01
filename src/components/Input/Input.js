import React from "react";
import './Input.scss';
import classNames from "classnames";

export default function Input(props) {
    return (
        <div className={classNames('custom-input', (props.inputProps && props.inputProps.disabled && 'is-disabled'))}>
            <div className="width">
                <input {...props.inputProps} />
                <div className="inner-right-child">
                    {props.rightChild && props.rightChild}
                </div>
            </div>

            {
                props.errMsg &&
                <div className="err-msg">
                    <span>{props.errMsg}</span>
                </div>
            }
        </div>
    )
}
