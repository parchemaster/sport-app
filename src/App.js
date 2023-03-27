import React from "react"
import data from './data/data.json' // Import the local data file
import {nanoid} from "nanoid"
import BodyPart from "./components/BodyPart"
import Exercise from "./components/Exercise"
// import exercisesListInRussian from "./data/exercisesInRussian"

export default function App() {
    const [bodyParts, setBodyParts] = React.useState([])
    const [allExercises, setAllExercises] = React.useState([])
    const [areAllGiftsShown, setAreAllGiftsShown] = React.useState(false)
    // const [isRussian, setIsRussian] = React.useState(false)
    // const [engExercises, setEngExercises] = React.useState([])
    // const [allExercisesInRussian, setAllExercisesInRussian] = React.useState([])



    React.useEffect(() => {
        //geting data of parts of body
        // fetch('https://sharai-gym-api.herokuapp.com/bodyParts')
        // .then(response => response.json())
        // .then(response => {
        //     setBodyParts(response)
        //     setBodyParts(oldResponse => oldResponse.map(part =>  ({name: part, isHeld: false, id: nanoid()})))
        // });
        setBodyParts(data.bodyParts); // Use the data from the local file instead of the API
        setBodyParts(oldResponse => oldResponse.map(part => ({ name: part, isHeld: false, id: nanoid() })));

        //geting data of all exercises
        // fetch('https://sharai-gym-api.herokuapp.com/exercises')
        // .then(response => response.json())
        // .then(response => {
        //     setAllExercises(response)
        //     setAllExercises(oldResponse => oldResponse.map(exercise => ({...exercise, isVisible: false, isSelected: false})))
        // });
        setAllExercises(data.exercises); // Use the data from the local file instead of the API
        setAllExercises(oldResponse => oldResponse.map(exercise => ({ ...exercise, isVisible: false, isSelected: false })));


        //geting data of all exercises in russian
        // fetch('https://sharai-gym-api.herokuapp.com/exercisesInRussian')
        // .then(response => response.json())
        // .then(response => {
        //     setAllExercisesInRussian(response)
        //     setAllExercisesInRussian(oldResponse => oldResponse.map(exercise => ({...exercise, isVisible: false, isSelected: false})))
        // });
    }, [])

    function handleBodyPartClick(id) {
        setBodyParts(preParts => preParts.map(part => {
            if(part.id === id) {
                const newPart = {...part, isHeld: !part.isHeld}
                return newPart;
            }
            else {
                return part;
            }
        }))
    }

    function handleExerciseSelection(id) {
        setAllExercises(oldExercises => oldExercises.map(exercise => {
            if(exercise.id === id) {
                const newExercise = {...exercise, isSelected: !exercise.isSelected}
                return newExercise;
            }
            else {
                return exercise;
            }
        }))
    }

    React.useEffect(() => {
        bodyParts.forEach(part => {
            setAllExercises(oldExercises => oldExercises.map(exercise => {
                if(exercise.bodyPart === part.name && part.isHeld) {
                    return {...exercise, isVisible: part.isHeld}
                }
                else if (exercise.bodyPart === part.name && !part.isHeld) {
                    return {...exercise, isVisible: part.isHeld}
                }
                else {
                    return exercise
                }
            }))
        })

    }, [bodyParts])

    function handlShowingAllGifts() {
        setAreAllGiftsShown(oldValue => !oldValue)
    }

    React.useEffect(() => {
        setAllExercises(oldExercises => oldExercises.map(exercise => {
            return {...exercise, isSelected: areAllGiftsShown}
        }))
    }, [areAllGiftsShown])

    // function handleChangelanguage() {
    //     setIsRussian(oldValue => !oldValue)
    //     setBodyParts(oldList => oldList.map(part => {return{...part, isHeld: false}}))
    // }

    // React.useEffect(() => {
    //     setAllExercises(oldExercises => 
    //         {
    //             if(isRussian) {
    //                 return allExercisesInRussian.map(exercise => {
    //                     return {...exercise, isVisible: false, isSelected: false}})
    //             }
    //             else {
    //                 return engExercises.map(engExercise => {return{...engExercise, isVisible: false, isSelected: false}})
    //             }
    //         }
    //     )
    // }, [isRussian])

    return (
        <div>
            <div className="body-part-container">
                {bodyParts.map(part => <BodyPart isHeld={part.isHeld} key={part.id} name={part.name} handleBodyPartClick={() => handleBodyPartClick(part.id)}/>)}
            </div>

            <div className="buttons">
                <div className="showExercisesButton" onClick={handlShowingAllGifts} style={{backgroundColor: areAllGiftsShown ? "#59E391" : "#F2F7F5"}}>
                    <p>Show all gifts</p>
                </div> 
                {/* <div className="changeLanguage" onClick={handleChangelanguage} style={{backgroundColor: isRussian ? "#59E391" : "#F2F7F5"}}>
                    <p>Change changeLanguage</p>
                </div>  */}
            </div>
            
            <div className="exercise-container">
                {allExercises.map(exercise => exercise.isVisible && <Exercise key={exercise.id} name={exercise.name} gifUrl={exercise.gifUrl} isSelected={exercise.isSelected} handleExerciseSelection={() => handleExerciseSelection(exercise.id)}/>)}
            </div>
        </div>
    )
}