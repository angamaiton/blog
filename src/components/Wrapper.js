import styled from 'styled-components';
import theme from 'styled-theming';

export const wrapperBackgroundColor = theme('mode', {
  day: '#fff',
  night: '#212121',
});

export const wrapperTextColor = theme('mode', {
  day: '#000',
  night: '#fff',
});

export const Container = styled.div`
  font-family: 'Rubik', 'Roboto', 'Segoe UI';
  line-height: 1.5;
  max-width: 720px;
  margin: 0 auto;
`;

export const Wrapper = styled.div`
  background-color: ${wrapperBackgroundColor};
  color: ${wrapperTextColor};
  margin: -8px;
  min-height: 100vh;
`;
