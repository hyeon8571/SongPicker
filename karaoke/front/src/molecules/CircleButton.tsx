import Text36 from '../atoms/Text36';
import { ButtonProps } from '../shared/Types';

const CircleButton = (props: ButtonProps) => {
  return (
    <div
      className="btn btn-circle w-44 h-44 shadow-lg font-pyeongchang font-thin"
      onClick={() => {
        props.handleClick();
      }}
    >
      <Text36 text={props.text} />
    </div>
  );
};

export default CircleButton;