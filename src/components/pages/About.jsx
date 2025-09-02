// ~ ABOUT ME PAGE ~ //

import 'react';
import './styles/pages.css';
import PageWrapper from '../pages/UI/PageWrapper';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row } from 'react-bootstrap';


function About() {
    return (
    <PageWrapper>
  <Container className="my-5 m-2">
    {/* Timeline row */}
    <Row className="align-items-start mb-5">
      {/* Year column */}
      <Col md={3} className="text-md-end text-center">
        <h1 className="display-3 aboutHeading mt-3 fw-bold">2020</h1>
      </Col>

      {/* Content column */}
      <Col md={9}>
        <h3 className="m-4 mt-3">
          With a strong focus on <strong>frontend development</strong>, I mastered{' '}
          <strong>HTML5</strong> and <strong>CSS3</strong>, completing a{' '}
          <strong>Codecademy</strong> course which opened the doors into the world of website
          development. During the pandemic this is where I had the time to explore.
        </h3>
      </Col>
    </Row>

<Row className="align-items-start mb-5">
  {/* Year column */}
  <Col md={3} className="text-md-end text-center">
    <h1 className="display-3 mt-3 aboutHeading fw-bold">2024</h1>
  </Col>

  {/* Content column */}
  <Col md={9}>
    <h3 className=" m-4 mt-3">
      I had the privilege to study at the <strong>University of Sydney</strong>,
      expanding and developing skills in various programming technologies. I
      enrolled in a <strong>Full Stack Engineer</strong> course with
      <strong> EDX Bootcamps</strong> and the <strong>University of Sydney</strong>,
      and became <strong>certified in August</strong> of this year.
    </h3>

    <h3 className=" m-4 mt-3">
      We delved straight into <strong>frontend basics</strong> to advanced
      <strong> CSS</strong> and frameworks such as <strong>JavaScript</strong>,
      <strong> TailwindCSS</strong>, <strong>Bootstrap</strong>, and <strong>jQuery</strong>,
      before advancing to <strong>React</strong>, which became the cornerstone of my
      frontend expertise. I progressed into <strong>backend technology</strong>,
      working with <strong>Node</strong>, <strong>Express.js</strong>, and
      <strong> FastAPI</strong>, gaining proficiency in databases including
      <strong> MySQL</strong>, <strong>PostgreSQL</strong>, and <strong>MongoDB</strong>,
      and became adept at using <strong>Sequelize</strong> and <strong>GraphQL</strong>
      for data management.
    </h3>

    <h3 className=" m-4 mt-3">
      During this course, we used tools like <strong>Visual Studio Code</strong>,
      <strong> Git</strong>, <strong>GitHub</strong>, <strong>GitLab</strong>, and the
      <strong> command-line interface</strong>, while applying
      <strong> Agile methodologies</strong> and working on <strong>group projects</strong> for
      <strong> Scrum project management</strong>. I also gained experience with
      <strong> WordPress</strong>, deployment services like <strong>Render</strong>, and
      expanded my knowledge of <strong>Apollo</strong> for <strong>state management</strong> and
      <strong> data fetching</strong> in React applications. This journey has not only
      <strong> expanded my technical abilities</strong> but also
      <strong> reinforced my passion</strong> for software development, preparing me to tackle
      future challenges with <strong>confidence and creativity</strong>.
    </h3>
  </Col>

      <Row className="align-items-start mt-5 mb-5">
        {/* Year column */}
        <Col md={3} className="text-md-end text-center">
        <h1 className="display-3 mt-3 aboutHeading fw-bold">2025</h1>   
        </Col>

        {/* Content column */}
        <Col md={9}>
        <h3 className="m-4 mt-3">
                    Developing new projects and seeking full time employment and support in Web Development.
        </h3>
        </Col>

    </Row>
</Row>

  </Container>
        </PageWrapper >
    );
}

export default About;



