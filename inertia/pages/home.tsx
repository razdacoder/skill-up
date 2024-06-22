import { Head } from '@inertiajs/react'
import { Button } from '~/components/ui/button'

export default function Home(props: { version: number }) {
  return (
    <>
      <Head title="Home" />

      <Button>Click Me {props.version}</Button>
      <img src="resources/assets/logo.svg" alt="" />
    </>
  )
}

// ,
