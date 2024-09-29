import Text30 from '../atoms/Text30';
import { ButtonProps } from '../shared/Types';

const MiniCircleButton = (props: ButtonProps) => {
  return (
    <div
      className={`btn btn-circle w-36 h-36 ${props.color} border-none shadow-lg font-pyeongchang font-light text-white`}
      onClick={() => {
        props.handleClick();
      }}
    >
      <Text30 text={props.text} />
    </div>
  );
};

export default MiniCircleButton;