import * as React from 'react';
import {
  RangeDatePicker
} from "react-google-flight-datepicker";

const DataRangePicker = ({onDateChange, dateData}) => {
  return (
      React.useCallback(<RangeDatePicker
        onChange={(startDate, endDate) => onDateChange(startDate, endDate)}
        startDate={new Date(2020, 0, 15)}
        endDate={new Date(2020, 1, 1)}
      />, [])
  );
}

export default DataRangePicker;
