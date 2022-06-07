const Bio = (): JSX.Element => {
  return (
    <div className="mt-[20px]">
      <div className="relative w-fit">
        <h3 className="font-bold text-[24px] relative z-20">Bio</h3>

        <div className="absolute bottom-2 right-0 h-[5px] w-[18px] bg-orange z-10"></div>
      </div>

      <p className="text-[18px]">
        <span className="font-bold">2000</span> Born in Juiz de Fora, Minas
        Gerais, Brazil
      </p>

      <p className="text-[18px]">
        <span className="font-bold">2019</span> Worked at{' '}
        <span className="text-orange font-bold">Brazilian Army</span> as a
        Soldier on technology section
      </p>

      <p className="text-[18px]">
        <span className="font-bold">2021</span> Worked at{' '}
        <span className="text-orange font-bold">Ligg Contact Services</span> as
        a Computer Support Analyst & Full Stack Developer
      </p>

      <p className="text-[18px]">
        <span className="font-bold">2022 to present</span> Working at{' '}
        <span className="text-orange font-bold">Cobogo</span> as a Full Stack
        Developer
      </p>
    </div>
  );
};

export default Bio;
