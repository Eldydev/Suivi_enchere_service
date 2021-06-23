import React, { Component } from 'react';
import { Link } from "react-router-dom";


class ConfirmStatus extends Component {
    constructor() {
        super();
        this.state = {
        };
    }

    Confirm() {
        document.getElementById('ConfirmStatus').style.display = "none"
    }


    render() {
        return (
            <div id="ConfirmStatus">
                <p>votre mise à jour de statut a bien été prise en compte et votre client a reçu l'information du passage
                    prochain de www.Enchères-services.fr chez la maison de vente pour récupérer son lot</p>
                <Link
                    to={{
                        pathname: '/contact'
                    }}
                >
                    <button onClick={(e) => this.Confirm()}>OK</button>
                </Link>
            </div>
        );
    }
}

export default ConfirmStatus