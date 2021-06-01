import React, {useEffect, useState} from "react";
import classNames from "classnames";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import "./PhoneNumber.scss";

export const PhoneNumber = (props) => {
	const [countryCode, setCountryCode] = useState(null);

    const handleNumber = (e) => {
        // props.inputProps.updateForm('phoneNumber', e)
    }

    useEffect(() => {
        fetch('https://extreme-ip-lookup.com/json/')
        .then( res => res.json())
        .then(response => {
            setCountryCode(response.countryCode)
        })
        .catch(() => {
            setCountryCode(null)
        })
	}, [])
    
    return (

        <div className={classNames('geo-input geo-input-phone', (props.inputProps && props.inputProps.disabled && 'is-disabled'))}>
            <PhoneInput
                defaultCountry={countryCode}
                {...props.inputProps}
                onChange={handleNumber}
                />
                {
                    props.errMsg &&
                    <div className="err-msg">
                        <span>{props.errMsg}</span>
                    </div>
                }
        </div>

    )
}
