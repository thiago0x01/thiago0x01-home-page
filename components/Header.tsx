const Header = (): JSX.Element => {
  return (
    <div className="flex justify-between">
      <div>
        <h1 className="font-bold text-[36px]">Thiago Machado</h1>

        <h2 className="text-[18px]">Developer</h2>
      </div>

      <div className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] rounded-full border-[4px] border-orange relative">
        <img
          src="/images/unnamed.png"
          className="rounded-full"
          alt="profile image"
        />
      </div>
    </div>
  );
};

export default Header;
