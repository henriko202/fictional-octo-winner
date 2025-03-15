type TaskInfoProps = {
  completed: boolean
  title: string
}

export const TaskInfo = ({ completed, title }: TaskInfoProps) => {
  return (
    <div>
      <p className={`${completed ? 'text-primary font-medium' : ''}`}>{title}</p>
      <p className="text-sm text-muted-foreground mt-1">{completed ? 'Completed' : 'In progress'}</p>
    </div>
  )
}
