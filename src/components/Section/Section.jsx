import PropTypes from 'prop-types';

import { SectionStyle, Title } from './Section.styled';

const Section = ({ title, children }) => (
  <SectionStyle>
    <Title>{title}</Title>
    {children}
  </SectionStyle>
);

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
