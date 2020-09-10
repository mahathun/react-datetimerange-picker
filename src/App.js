import React, {useState} from "react";
import DateTimeRangePicker from './entry'

const App = () => {

    const [value, onChange] = useState([new Date(), new Date()]);


  return (
    <div>
        <h1>test</h1>
        <DateTimeRangePicker
            onChange={onChange}
            value={value}
            rangeDivider="---++--"
            format="y-MM-dd | h:mm a"
            maxDate={new Date()}
            disableTimePicker={false}
        />
    </div>
  );
};

export default App;
