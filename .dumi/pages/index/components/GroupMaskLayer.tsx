import { createStyles } from 'antd-style';
import classNames from 'classnames';
import React from 'react';

const useStyle = createStyles(({ css }) => ({
  siteMask: css`
    z-index: 1;
    position: relative;
  `,
}));

export interface GroupMaskLayerProps {
  className?: string;
  style?: React.CSSProperties;
  onMouseMove?: React.MouseEventHandler<HTMLDivElement>;
  onMouseEnter?: React.MouseEventHandler<HTMLDivElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
}

const GroupMaskLayer: React.FC<React.PropsWithChildren<GroupMaskLayerProps>> = (
  props,
) => {
  const {
    children,
    className,
    style,
    onMouseMove,
    onMouseEnter,
    onMouseLeave,
  } = props;
  const { styles } = useStyle();
  return (
    <div
      style={style}
      className={classNames(className, styles.siteMask)}
      onMouseMove={onMouseMove}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </div>
  );
};

export default GroupMaskLayer;
