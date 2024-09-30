import Text36 from '../atoms/Text36';
import { ButtonProps } from '../shared/Types';

const CircleButton = (props: ButtonProps) => {
  return (
    <div
      className={`btn btn-circle w-44 h-44 ${props.color} border-none text-white shadow-lg font-pyeongchang font-light`}
      onClick={() => {
        props.handleClick();
      }}
    >
      <Text36 text={props.text} />
    </div>
  );
};

export default CircleButton;