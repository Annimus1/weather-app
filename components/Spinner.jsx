import Image from 'next/image';
import spinner from '../public/spinner.gif';

export default function Spinner(){
  return(
    <div>
      <Image 
        className='w-[200px] m-auto block'
        alt={'Loading'} 
        src={spinner} 
      />          
    </div>
  );
}