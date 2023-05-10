import { Heading, SectionWrapper } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <SectionWrapper>
      <Heading>{title}</Heading>
      {children}
    </SectionWrapper>
  );
};

export default Section;
