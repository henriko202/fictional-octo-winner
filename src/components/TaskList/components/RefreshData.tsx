import { useTranslation } from 'react-i18next'
import { useLoadTodos } from '@src/components/TaskList/queries/useLoadTodos'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@components/ui/tooltip'
import { Loader } from 'lucide-react'
import { cn } from '@src/utils'

export const RefreshData = () => {
  const { t } = useTranslation()

  const { refetch, isRefetching } = useLoadTodos()

  return (
    <div className="absolute top-6 right-6">
      <TooltipProvider delayDuration={100}>
        <Tooltip>
          <TooltipTrigger>
            <Loader
              onClick={async () => await refetch()}
              className={cn('h-5 w-5 cursor-pointer', {
                'animate-spin': isRefetching,
              })}
            />
          </TooltipTrigger>
          <TooltipContent>{t('task:refreshData')}</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}
