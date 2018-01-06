import GatsbyLink from 'gatsby-link';
import styled from 'styled-components';
import theme from 'styled-theming';

const linkBackgroundColor = theme('mode', {
  day: '#212121',
  night: '#1E88E5',
});

const LinkBase = styled(GatsbyLink)`
  text-decoration: none;
  color: ${linkBackgroundColor};
`;

export const Link = LinkBase.extend`
  margin-left: 1rem;
  color: ${linkBackgroundColor};
`;

export const Brand = LinkBase.extend`
  font-weight: bold;
`;

export const BlogLink = LinkBase.extend``;

export const NonFunctionalLink = styled.p`
  margin-left: 1rem;
`;
