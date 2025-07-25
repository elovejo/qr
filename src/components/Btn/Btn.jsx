import s from './Btn.module.css'
import Icons from './Icons'

const Btn = ({ text, onClick, iconName, disabled }) => {
  const Icon = Icons[iconName];

    return (
      <button
        onClick={onClick}
        className={`${s.btn} ${disabled ? s.disabled : ''}`}
        disabled={disabled}
      >
        {Icon && <Icon width={20} height={20} />}
        {text}
      </button>
    );
  };

export default Btn