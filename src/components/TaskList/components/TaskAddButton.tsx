import { Button } from '@src/shared/ui/button'
import { Plus } from 'lucide-react'

export const TaskAddButton = () => {
  return (
    <div className="flex justify-center items-center py-4">
      <Button
        variant="outline"
        className="flex items-center gap-2 !border-primary text-primary hover:!border-primary hover:text-primary"
      >
        <Plus className="h-[1.2rem] w-[1.2rem] transition-all" />
        <span>Add Task</span>
      </Button>
    </div>
  )
}
