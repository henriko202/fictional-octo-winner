import { useTranslation } from 'react-i18next'

type TaskInfoProps = {
  completed: boolean
  title: string
}

export const TaskInfo = ({ completed, title }: TaskInfoProps) => {
  const { t } = useTranslation()

  return (
    <div>
      <p className={`${completed ? 'text-primary font-medium' : ''}`}>{title}</p>
      <p className="text-sm text-muted-foreground mt-1">{completed ? t('task:completed') : t('task:inProgress')}</p>
    </div>
  )
}
