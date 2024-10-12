import { Button } from '../ui/button'

export default function NavTitle() {
  return <Button variant={'noShadow'} className='text-2xl font-bold px-5 py-3'>{import.meta.env.VITE_APP_NAME}</Button>
}
