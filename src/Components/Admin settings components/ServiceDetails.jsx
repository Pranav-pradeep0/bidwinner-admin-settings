import React from "react"
import MarketSectors from "./Service Detail Components/MarketSectors"
import { Box, Divider } from "@mui/material"
import CompanyType from "./Service Detail Components/CompanyType"
import TradeAndServices from "./Service Detail Components/TradeAndServices"
import styled from "styled-components"

const ScrollableBox = styled(Box)`
::-webkit-scrollbar {
    width: 10px;
}

::-webkit-scrollbar-thumb {
    background-color: rgba(217, 217, 217, 1);
    border-radius: 5px;
}

::-webkit-scrollbar-track {
    background-color: #f1f1f1;
}
`;

const ServiceDetails = () => {

    return (

        <ScrollableBox>
            <Box sx={{ maxHeight: '430px',overflowY: 'scroll', width: {xs:'40vw', md:'50vw', lg:'36vw',}}}>
                <MarketSectors></MarketSectors>
                <CompanyType></CompanyType>
                <TradeAndServices></TradeAndServices>
            </Box>
        </ScrollableBox>
    )
}

export default ServiceDetails