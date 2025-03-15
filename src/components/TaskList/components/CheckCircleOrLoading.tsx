import { CheckCircle2, Circle, Loader2 } from 'lucide-react'

export const CheckCircleOrLoading = ({ loading, completed }: { loading: boolean; completed: boolean }) => {
  if (loading) {
    return <Loader2 className="h-5 w-5 animate-spin text-primary" />
  }

  return completed ? (
    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
  ) : (
    <Circle className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
  )
}
