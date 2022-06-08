import * as React from 'react';
import {
  RangeDatePicker
} from "react-google-flight-datepicker";

const DataRangePicker = () => {
  return (
    <RangeDatePicker
      startDate={new Date(2020, 0, 15)}
      endDate={new Date(2020, 1, 1)}
    />
  );
}

export default DataRangePicker;
