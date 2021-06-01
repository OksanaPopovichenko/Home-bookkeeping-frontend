import React from "react";
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import './Select.scss';

export default function SelectList(props) {
    const {options} = props;

    const renderOptions = () => {

        return options.map( option => {
            const {label, value, key} = option;
            return (
                <MenuItem value={value} key={key}>{label}</MenuItem>
            )
        })
    }
    
    return (
            <div className={'custom-select'}>
                <div className="width">
                    <FormControl >
                        <Select
                            value={props.value ? props.value : ''}
                            // value={0}
                            displayEmpty
                            // onChange={(value) => props.onChange && props.onChange(value)}>
                            onChange={props.onChange}>
                            {renderOptions()}
                        </Select>
                    </FormControl>
                </div>

                {
                    props.errMsg &&
                    <div className="err-msg" style={{position: 'relative', width: '100%', marginTop: '5px'}}>
                        <span>{props.errMsg}</span>
                    </div>
                }
            </div>
    )
}
