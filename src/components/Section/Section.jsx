import { Heading } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <section>
      <Heading>{title}</Heading>
      {children}
    </section>
  );
};

export default Section;
