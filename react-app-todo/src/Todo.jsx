export default function Todo({task, isDone}) {
    return (
        <ul>
            {/* {
                isDone ? <li>Finished: {task}</li> : <li>Word On: {task}</li>
            } */}
            {/* <li>{isDone ? 'Finished' : 'Work On'}: {task}</li> */}
            {/* <li>{task} {isDone && ': Done'}</li> */}
            <li>{task} {isDone || ': Do it'}</li>
        </ul>
    )
}