const Works = (): JSX.Element => {
  return (
    <div className="mt-[30px]">
      <div className="relative w-fit">
        <h3 className="font-bold text-[24px] relative z-20">Works</h3>

        <div className="absolute bottom-2 right-0 h-[5px] w-[35px] bg-orange z-10"></div>
      </div>

      <p className="text-[18px]">
        Thiago is a “
        <span className="text-orange font-bold">Professional on T</span>” with
        expertise on <span className="text-orange font-bold">front end</span>{' '}
        development using{' '}
        <span className="text-orange font-bold">
          TypeScript and React
        </span>
        . Too have embracing knowledge on back end development with{' '}
        <span className="text-orange font-bold">
          TypeScript, Node.js, SQL and NoSQL, UI Design
        </span>{' '}
        with <span className="text-orange font-bold">Figma</span>.
      </p>
    </div>
  );
};

export default Works;
