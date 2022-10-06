import React from "react"

export default function Exercise(props) {
    return (
        <div className={props.isSelected ? "exerciseWithGif" : "exercise"} onClick={props.handleExerciseSelection}>
            {props.name}
            {props.isSelected && <img src={props.gifUrl} alt="gif" className="gif"/>}
        </div>
    )
}