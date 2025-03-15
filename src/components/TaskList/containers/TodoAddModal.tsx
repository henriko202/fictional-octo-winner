import { useTodoListContext } from '@src/components/TaskList/hooks/context'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@components/ui/dialog'
import { useTranslation } from 'react-i18next'
import { TodoForm } from '@src/components/TaskList/containers/TodoForm'

export const TodoAddModal = () => {
  const { t } = useTranslation()
  const { isCreateModalOpen, closeCreateModal } = useTodoListContext()

  return (
    <Dialog open={isCreateModalOpen} onOpenChange={closeCreateModal}>
      <DialogContent className="[&>button]:hidden" onInteractOutside={(e) => e.preventDefault()}>
        <DialogHeader>
          <DialogTitle className="text-lg font-medium text-center text-primary leading-none">
            {t('task:createTask')}
          </DialogTitle>
          <TodoForm />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
