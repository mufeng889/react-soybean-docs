import { FloatButton } from 'antd';
import { DarkTheme } from 'antd-token-previewer/es/icons';
import React from 'react';
import { FormattedMessage } from 'dumi';

import useThemeAnimation from '../../../hooks/useThemeAnimation';



export type ThemeName =
  | 'light'
  | 'dark'


export interface ThemeSwitchProps {
  value?: ThemeName[];
  onChange: (value: ThemeName[]) => void;
}

const ThemeSwitch: React.FC<ThemeSwitchProps> = (props) => {
  const { value = ['light'], onChange } = props;

  const isDark = value.includes('dark');

  const toggleAnimationTheme = useThemeAnimation();

  return (
      <FloatButton
        icon={<DarkTheme />}
        type={isDark ? 'primary' : 'default'}
        onClick={(e) => {
          // Toggle animation when switch theme
          toggleAnimationTheme(e, isDark);

          if (isDark) {
            onChange(value.filter((theme) => theme !== 'dark'));
          } else {
            onChange([...value, 'dark']);
          }
        }}
        tooltip={<FormattedMessage id="app.theme.switch.dark" />}
      />
  );
};

export default ThemeSwitch;
