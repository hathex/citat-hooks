import React from 'react';

const CitatListe = (props) => {

    let citatliste = props.alleCitaterProp.map(
        c => {
            return (
                <div>
                    <p>{c.citattxt}</p>
                    <p><i>{c.forfatter}</i></p>
                    <p><i>{c.aarstal}</i></p>
                    <button className="btn" onClick={() => {props.sletCitaterProp(c.id)}}>Slet</button>
                </div>
            );
        }


    );

    return (
        <div>
            <h1>citatliste</h1>

            {citatliste}
        </div>
    );
}

export default CitatListe;