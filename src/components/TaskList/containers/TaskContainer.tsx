import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@src/shared/ui/card'
import TaskList from '@src/components/TaskList'

export const TaskContainer = () => {
  return (
    <main className="container mx-auto py-10 px-4">
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl">Task Manager</CardTitle>
          <CardDescription>View and manage your tasks with ease</CardDescription>
        </CardHeader>
        <CardContent>
          <TaskList />
        </CardContent>
      </Card>
    </main>
  )
}
