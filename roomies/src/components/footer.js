import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright, faPhoneSquare, faPencilRuler, faWifi } from '@fortawesome/free-solid-svg-icons'

library.add(faCopyright, faPhoneSquare, faPencilRuler, faWifi);



class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="footer__copyright">
                    <FontAwesomeIcon icon="copyright"/> copyright 2019
                </div>
                <div className="footer__support-line">
                    <FontAwesomeIcon icon="phone-square"/> Support Line: 555-555-5555
                </div>
                <div className="footer__roomies">
                    - Roomies -
                </div>
                <div className="footer__creator">
                    <FontAwesomeIcon icon="pencil-ruler" /> Creator: Matthew James
                </div>
                <div className="footer__react">
                    <FontAwesomeIcon icon="wifi" /> ReactApp
                </div>
            </div>
        )
    }
}

export default Footer;