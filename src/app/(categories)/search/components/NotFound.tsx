import image404 from '../../../../../public/404.png'
import Image from 'next/image'

export default function NotFound() {
  return (
    <div>
        <Image src={image404} alt="404 image" width={512} height={249} />
    </div>
  )
}
