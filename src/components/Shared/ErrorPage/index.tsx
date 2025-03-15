import { useTranslation } from 'react-i18next'
import { Link, useRouteError } from 'react-router-dom'
import { Button } from '@components/ui/button'

export default function ErrorPage() {
  const error = useRouteError() as any
  const { t } = useTranslation()

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-4 text-left">
      <h1>{t('notFound:oops')}</h1>
      <p>{t('notFound:title')}</p>
      <p className="font-mono">
        <span className="mr-2">{error?.status}</span>
        <i>{error?.statusText || error?.message}</i>
      </p>
      <Button asChild>
        <Link to="/">{t('notFound:backToHome')}</Link>
      </Button>
    </div>
  )
}
