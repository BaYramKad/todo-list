import type { TodoIcons } from '../../types/icons';

export const ActiveTaskIcon = ({ onClick, className, width = 30, height = 30 }: TodoIcons) => {
  return (
    <div onClick={onClick} className={className}>
      <svg viewBox='0 0 30 30' width={width} height={height}>
        <path d='M 15 3 C 8.3844276 3 3 8.3844276 3 15 C 3 21.615572 8.3844276 27 15 27 C 21.615572 27 27 21.615572 27 15 C 27 8.3844276 21.615572 3 15 3 z M 15 5 C 20.534692 5 25 9.4653079 25 15 C 25 20.534692 20.534692 25 15 25 C 9.4653079 25 5 20.534692 5 15 C 5 9.4653079 9.4653079 5 15 5 z' />
      </svg>
    </div>
  );
};
