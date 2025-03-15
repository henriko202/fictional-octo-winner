import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { TodoFormSchema } from '@src/components/TaskList/domain/types/TodoFormSchema'
import { Button } from '@src/shared/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@components/ui/form'
import { Input } from '@components/ui/input'
import { useTranslation } from 'react-i18next'
import { useTodoListContext } from '@src/components/TaskList/hooks/context'
import { TodosMutations } from '@src/components/TaskList/mutations'
import { toast } from 'sonner'

export const TodoForm = () => {
  const { t } = useTranslation()
  const { closeCreateModal } = useTodoListContext()
  const addTodoMutation = TodosMutations.useCreateTodo()

  const form = useForm<z.infer<typeof TodoFormSchema>>({
    resolver: zodResolver(TodoFormSchema),
    defaultValues: {
      title: '',
    },
  })

  async function onSubmit(data: z.infer<typeof TodoFormSchema>) {
    await addTodoMutation.createTodo({ title: data.title })
    toast.success(t('task:todoCreated'))
    closeCreateModal()
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('task:taskName')}</FormLabel>
              <FormControl>
                <Input placeholder={t('task:taskPlaceholder')} {...field} />
              </FormControl>
              <FormDescription>{t('task:taskDescription')}</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end gap-4">
          <Button
            variant="outline"
            onClick={(e) => {
              e.preventDefault()
              closeCreateModal()
            }}
          >
            {t('task:cancel')}
          </Button>
          <Button type="submit">{t('task:save')}</Button>
        </div>
      </form>
    </Form>
  )
}
