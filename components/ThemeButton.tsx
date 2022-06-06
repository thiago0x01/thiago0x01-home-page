import { ImBrightnessContrast } from 'react-icons/im';

const ThemeButton = (): JSX.Element => {
  return (
    <button className="w-[35px] h-[35px] bg-red flex justify-center items-center rounded-[5px]">
      <ImBrightnessContrast size={20} />
    </button>
  );
};

export default ThemeButton;
