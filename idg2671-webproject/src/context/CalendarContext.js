import { createContext, useState } from 'react';

const DateContext = createContext(null);

const DateProvider = ({ children }) => {
    const [chosenDate, setChosenDate] = useState(null);
    const [chosenTime, setChosenTime] = useState(null);
    const [chosenTool, setChosenTool] = useState(null);

    return (
        <DateContext.Provider value={{ chosenDate, setChosenDate, chosenTime, setChosenTime, chosenTool, setChosenTool }}>
            {children}
        </DateContext.Provider>
    )
}

export { DateContext, DateProvider };
