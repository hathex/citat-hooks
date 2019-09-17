import React, { useState } from 'react';

const OpretCitat = (props) => {

    //state
    const [citat, setCitat] = useState(
        {
            citattxt: "",
            forfatter: "",
            aarstal: ""
        }
    );

    //
    const handleCitattext = (e) => {
        setCitat({ ...citat, citattxt: e.target.value })
    }

    const handleForfatternavn = (e) => {
        setCitat({ ...citat, forfatter: e.target.value })
    }

    const handleAarstal = (e) => {
        setCitat({ ...citat, aarstal: e.target.value })
    }

    const handleGemCitat = (e) => {
        e.preventDefault();
        props.opretCitatProp(citat);
        setCitat({
            citattxt: "",
            forfatter: "",
            aarstal: ""
        })
    }

    return (

        <form onSubmit={handleGemCitat}>

            <input type="text" placeholder="citat her" id="citattext" value={citat.citattxt} onChange={handleCitattext}  />
            <br />

            <input type="text" placeholder="forfatter her" id="forfatternavn" value={citat.forfatter} onChange={handleForfatternavn} />
            <br />

            <input type="text" placeholder="aarstal her" id="aarstal" value={citat.aarstal} onChange={handleAarstal} />
            <br />

            <button className="btn" onSubmit={handleGemCitat}>Gem citat</button>
        </form>
    );
}

export default OpretCitat;