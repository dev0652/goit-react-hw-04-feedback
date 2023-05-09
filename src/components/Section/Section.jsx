import { Heading } from './Section.styled';

const Section = ({ title, children }) => {
  <section>
    <Heading>{title}</Heading>
    {children}
  </section>;
};

export default Section;
