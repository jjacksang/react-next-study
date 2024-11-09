import { useState } from "react";

export default function useInput() {
    const [value, setValue] = useState();

    const onChagneValue = (e) => {
        setValue(e.target.value);
    };

    return [value, onChagneValue];
}
