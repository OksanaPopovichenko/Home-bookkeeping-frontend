import React, { useState } from "react";
import './Datepicker.scss';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function DatepickerField(props) {
    const [startDate, setStartDate] = useState(new Date());

    return (
        <div>
            <DatePicker selected={props.startDate} onChange={date => setStartDate(date)} />
        </div>
    )
}
