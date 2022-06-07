import { ImGithub, ImLinkedin, ImTwitter } from 'react-icons/im';

const OnTheWeb = (): JSX.Element => {
  return (
    <div className="mt-[20px]">
      <div className="relative w-fit">
        <h3 className="font-bold text-[24px] relative z-20">On the web</h3>

        <div className="absolute bottom-2 right-0 h-[5px] w-[62px] bg-orange z-10"></div>
      </div>

      <a
        target="_blank"
        href="https://www.linkedin.com/in/thiago0x01/"
        className="text-[18px] text-orange flex justify-start items-center"
        rel="noreferrer"
      >
        <div className="mr-1">
          <ImLinkedin />
        </div>
        @thiago0x01
      </a>

      <a
        target="_blank"
        href="https://twitter.com/thiago0x01"
        className="text-[18px] text-orange flex justify-start items-center"
        rel="noreferrer"
      >
        <div className="mr-1">
          <ImTwitter />
        </div>
        @thiago0x01
      </a>

      <a
        target="_blank"
        href="https://github.com/thiago0x01"
        className="text-[18px] text-orange flex justify-start items-center"
        rel="noreferrer"
      >
        <div className="mr-1">
          <ImGithub />
        </div>
        @thiago0x01
      </a>
    </div>
  );
};

export default OnTheWeb;
