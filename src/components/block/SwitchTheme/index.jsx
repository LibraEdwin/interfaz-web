import { useAppContext } from '@contexts/AppContext';
import SwitchThemeStyled from './switchTheme.styled';

const SwitchTheme = () => {
  const { theme: { themeMode, changeThemeFunction } } = useAppContext();
  return (
    <SwitchThemeStyled.Wrapper >
      <input
        type="checkbox"
        defaultChecked={themeMode.mode !== 'light'}
        onChange={changeThemeFunction} />
      <SwitchThemeStyled.Slider />
    </SwitchThemeStyled.Wrapper>
  );
};

export default SwitchTheme;
