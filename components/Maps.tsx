import React from 'react'

const Maps = () => {
    return (
        <div className="w-screen relative top-52 pb-24">
            <div className="w-11/12 m-auto flex justify-center">
                <iframe width="1000" height="450" id="gmap_canvas" src="https://maps.google.com/maps?q=rue%20Henri%20Werrie,%2094%201090%20JETTE&t=&z=13&ie=UTF8&iwloc=&output=embed" scrolling="no"></iframe>
            </div>
        </div>
    )
}

export default Maps
