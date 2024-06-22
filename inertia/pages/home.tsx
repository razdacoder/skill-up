import { Head } from '@inertiajs/react'
import { Button } from '~/components/ui/button'

export default function Home(props: { version: number }) {
  return (
    <>
      <Head title="Homepage" />

      <Button>Click Me {props.version}</Button>
    </>
  )
}

// ,
