import React from 'react'
import '../Styles/loading.css'
function Loading() {
    return (
        <div className="caja">
            <div className="centrado">
                <div className="loadingio-spinner-bars-jl0izsh3cc">
                    <div className="ldio-at0j3uszb4c">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <div className="cargando-texto">Cargando</div>
                {/* <Alert variant="secondary" className="cargando-texto">Cargando</Alert> */}
            </div>
        </div>
    )
}

export default Loading
