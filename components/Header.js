import Image from 'next/image';

import HeaderIcon from './HeaderIcon';
import {
  HomeIcon,
  UserIcon,
  PhoneIcon,
  InformationCircleIcon,
} from '@heroicons/react/solid';

const Header = () => {
  return (
    <div className='bg-gray-700 text-gray-200 flex flex-col items-center p-6 select-none sm:flex-row justify-between'>
      <div className='flex '>
        <HeaderIcon Icon={HomeIcon} title='HOME' />
        <HeaderIcon Icon={UserIcon} title='ACCOUNT' />
        <HeaderIcon Icon={PhoneIcon} title='CONTACT' />
        <HeaderIcon Icon={InformationCircleIcon} title='ABOUT' />
      </div>
      <Image
        src='https://wikiimg.tojsiabtv.com/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/1200px-IMDB_Logo_2016.svg.png'
        height={60}
        width={120}
        className='cursor-pointer active:brightness-110'
      />
    </div>
  );
};

export default Header;
