import React from "react"


export default function BodyPart(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }
    return (
        <div className="body-part" onClick={props.handleBodyPartClick} style={styles}>
            <p>{props.name}</p>
        </div>
    )
}