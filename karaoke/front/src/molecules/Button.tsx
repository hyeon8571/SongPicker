import Text48 from '../atoms/Text48';

type ButtonProps = {
  text: string;
  handleClick: () => void;
};

const Button = (props: ButtonProps) => {
  return (
    <div
      className="btn w-96 h-20 rounded-md bg-gradient-to-r from-purple to-[#991571] border-none shadow-lg font-pyeongchang text-white font-thin hover:bg-none hover:bg-pink"
      onClick={() => {
        props.handleClick();
      }}
    >
      <Text48 text={props.text} />
    </div>
  );
};

export default Button;
