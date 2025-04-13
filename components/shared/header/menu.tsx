import { ShoppingCartIcon} from 'lucide-react'
import Link from 'next/link'

export default function Menu() {
  return (
    <div className='flex justify-end'>
      <nav className='flex gap-3 w-full'>
        <Link href='/signin' className='header-button flex items-center justify-center hover:text-white'>
  Hello,Sign in
        </Link>

        <Link href='/cart' className='header-button p-2 flex items-center justify-center flex-col'>
          <ShoppingCartIcon className='h-8 w-8' />
          <span className='font-bold'>Cart</span>
        </Link>
      </nav>
    </div>
  )
}