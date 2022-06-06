import { ImBrightnessContrast } from 'react-icons/im';
import ThemeButton from './ThemeButton';

const Menu = (): JSX.Element => {
  return (
    <div className="h-[100px] absolute top-0 flex justify-between items-center px-[270px] w-full">
      <div className="flex">
        <h1 className="font-bold mr-[20px]">Thiago Machado</h1>

        <a>Works</a>
      </div>

      <ThemeButton />
    </div>
  );
};

export default Menu;
