import React, { useState, useEffect } from "react";
import List from "./List";
import ListElement from "./ListElement";
import { Link } from "react-router-dom";

function ListElementTool({tool}) {
    return (
        <div key={tool}>
            {/* SIDESPOR, DETTE ER MÅTEN JEG HAR LINKET TIL DEN UNIKE SIDEN MED MER INFO OM HVERT ENKELT TOOL */}
            <Link
                to={{
                    pathname: `/tools/${tool}`,
                    state: { tools: tool } 
                    // HER LAGRER JEG I STATE SLIK AT JEG KAN TA DET MED MEG VIDERE TIL NESTE SIDE
                    // MERK AT JEG IKKE GJØR DET I DETTE TILFELLET, JEG HENTER HELLER FRA DB PÅ NYTT.
                    // GRUNNEN ER AT JEG VIL AT FOLK KAN GÅ INN PÅ SAMME SIDE HVIS DE SKRIVER BLAHBLAH/TOOLS/LASERKUTTER1 I URL'EN
                    // I ANDRE TILFELLER ØNSKER MAN IKKE DETTE, FEKS VED BOOKING. DA FORESLÅR JEG Å SENDE STATE VIDERE
                    // EKSEMPEL: https://codesandbox.io/s/focused-wright-w8il9?file=/src/ViewUserDetails.js:117-149
                }}
            >
                {tool}
            </Link>
        </div>

        // DETTE VAR SÅNN VI GJORDE FØR
        // <a href={/tools/id} >{tool}</a>
    )
}

function ListTools() {
    // HER KOMMER FETCHINGEN FRA API'en
    // set a state to store the data upon return 
    const [tools, setTools] = useState(null);
    const [loading, setLoading] = useState(true); //improve user experience
    const [error, setError] = useState(null); //manage error

    // fetch data in the Hook with useEffect
    useEffect(() => {
        async function fetchData() {
        try {
            // URL'EN SAMSVARER MED ROUTESENE FRA API'EN, ER DU USIKKER SJEKK ROUTESENE DER.
            // GJERNE TEST UT LINKEN I NETTLESEREN DIN FØRST, SLIK AT DU VET AT DET ER RIKTIG LINK
            const response = await fetch('https://webproject-api-production.up.railway.app/api/tools', {
                method: "GET" // GET ER DEFAULT SÅ METODE ER IKKE NØDVENDIG, MEN GREI VANE I GUESS
            });
            // SEND ERROR HVIS DET SKJER NOE
            if (!response.ok) {
                throw new Error(
                    `This is an HTTP error: The status is ${response.status}`
                )
            }
            // RESULTATET AV FETCHEN
            const toolsData = await response.json();
            // SETT STATE SÅ DU KAN BRUKE DET SENERE I KODEN
            setTools(toolsData);
            setError(null);
        } catch (error) {
            setError(error.message);
            setTools(null)
        } finally {
            setLoading(false)
        }
        }
        fetchData();
    }, []);

    return (
        <List>
            {/* HER BRUKER JEG STATE'EN TOOLS FOR Å GÅ IGJENNOM ALLE TOOLSENE OG LAGE ET LISTEELEMENT TIL LISTEN */}
            {tools.map((tool, index) => (
                <ListElement key={index}>
                    <div className="flex flex-row justify-between items-center">
                        {/* HER HENTER JEG NAVNET PÅ TOOLEN VED Å BRUKE KEY'EN 'NAME'. 
                        HVIS DU ER USIKKER PÅ HVA KEYEN ER, SJEKK HVA DU FÅR FRA API'EN VED Å ÅPNE LINKEN TIL API'EN */}
                        <ListElementTool tool={tool.name} /> 
                        <button>
                            <svg width="20" height="20" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13 0C5.82075 0 0 5.82075 0 13C0 20.1793 5.82075 26 13 26C20.1793 26 26 20.1793 26 13C26 5.82075 20.1793 0 13 0ZM14.0833 19.5H11.9167V11.9167H14.0833V19.5ZM13 9.20833C12.103 9.20833 11.375 8.48033 11.375 7.58333C11.375 6.68633 12.103 5.95833 13 5.95833C13.897 5.95833 14.625 6.68633 14.625 7.58333C14.625 8.48033 13.897 9.20833 13 9.20833Z" fill="#204F99" />@
                            </svg>
                        </button>
                    </div>
                 </ListElement>
                 ))}
        </List> 
    )
}

export default ListTools;