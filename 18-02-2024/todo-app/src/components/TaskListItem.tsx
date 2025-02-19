type TProps = {
    task : string
}

const TaskListItem = ({task}: TProps) => {
  return (
    <>
    <div>{task}</div>
    </>
  )
}

export default TaskListItem