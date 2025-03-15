import { Button } from '@src/shared/ui/button'
import { Plus } from 'lucide-react'
import { useTodoListContext } from '@src/components/TaskList/hooks/context'
import { useTranslation } from 'react-i18next'
import { Dialog, DialogTrigger } from '@src/shared/ui/dialog'

export const TodoAddButton = () => {
  const { t } = useTranslation()
  const { openCreateModal } = useTodoListContext()

  return (
    <div className="flex justify-center items-center py-4">
      <Dialog>
        <DialogTrigger asChild onClick={openCreateModal}>
          <Button
            variant="outline"
            className="flex items-center gap-2 !border-primary text-primary hover:!border-primary hover:text-primary"
          >
            <Plus className="h-[1.2rem] w-[1.2rem] transition-all" />
            <span>{t('task:addTask')}</span>
          </Button>
        </DialogTrigger>
      </Dialog>
    </div>
  )
}
