import React, { useState } from "react";
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';


export const CenteredTabs = (props) => {
    const [tabSelected, setTabSelected] = useState(0);
    const handleChange = (e, value) => {
        setTabSelected(value);
    };

    return (
        <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
            <Tabs onChange={handleChange} value={tabSelected} centered>
            {props.tabSections.map(
                (tab, i) => {
                    return(
                        <Tab key={i} label={tab.label} />
                    )})}
            </Tabs>
            <div>
                { <p>
                    {props.tabSections[tabSelected].content}
                </p> }
            </div>
        </Box>
    );
};