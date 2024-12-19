import React from 'react';
import { Card, Row, Col, Typography, message } from 'antd';
import './index.scss';

const { Title } = Typography;

const CourseGrid = () => {
  const courses = [
    {
      title: "L01-信息可视化简介",
      cover: `${process.env.PUBLIC_URL}/images/slides/1.jpg`,
      pdf: `${process.env.PUBLIC_URL}/materials/lesson1/slide1.pdf`
    },
    {
      title: "L02-数据及数据分析基础",
      cover: `${process.env.PUBLIC_URL}/images/slides/2.jpg`,
      pdf: `${process.env.PUBLIC_URL}/materials/lesson2/slide2.pdf`
    },
    {
      title: "L03-可视化的基本设计准则",
      cover: `${process.env.PUBLIC_URL}/images/slides/3.jpg`,
      pdf: `${process.env.PUBLIC_URL}/materials/lesson3/slide3.pdf`
    },
    {
      title: "L04-交互技术与动画",
     cover: `${process.env.PUBLIC_URL}/images/slides/4.jpg`,
      pdf: `${process.env.PUBLIC_URL}/materials/lesson4/slide4.pdf`
    },
    {
      title: "L05-针对不同数据类型的可视化技术",
      cover: `${process.env.PUBLIC_URL}/images/slides/5.jpg`,
      pdf: `${process.env.PUBLIC_URL}/materials/lesson5/slide5.pdf`
    },
    {
      title: "L06-多维度数据可视化",
      cover: `${process.env.PUBLIC_URL}/images/slides/6.jpg`,
      pdf: `${process.env.PUBLIC_URL}/materials/lesson6/slide6.pdf`
    },
    {
      title: "L07-可视化叙事",
      cover: `${process.env.PUBLIC_URL}/images/slides/7.jpg`,
      pdf: `${process.env.PUBLIC_URL}/materials/lesson7/slide7.pdf`
    },
    {
      title: "L08-可视化叙事中的叙事结构",
      cover: `${process.env.PUBLIC_URL}/images/slides/8.jpg`,
      pdf: `${process.env.PUBLIC_URL}/materials/lesson8/slide8.pdf`
    },
    {
      title: "L09-可视化叙事中的动画设计",
      cover: `${process.env.PUBLIC_URL}/images/slides/9.jpg`,
      pdf: `${process.env.PUBLIC_URL}/materials/lesson9/slide9.pdf`
    },
    {
      title: "L10-可视化的评估方法",
      cover: `${process.env.PUBLIC_URL}/images/slides/10.jpg`,
      pdf: `${process.env.PUBLIC_URL}/materials/lesson10/slide10.pdf`
    },
    {
      title: "L11-文本数据可视化",
      cover: `${process.env.PUBLIC_URL}/images/slides/11.jpg`,
      pdf: `${process.env.PUBLIC_URL}/materials/lesson11/slide11.pdf`
    },
    {
      title: "L12-地理数据可视化",
      cover: `${process.env.PUBLIC_URL}/images/slides/12.jpg`,
      pdf: `${process.env.PUBLIC_URL}/materials/lesson12/slide12.pdf`
    },
    {
      title: "L13-时序数据可视化 ",
      cover: `${process.env.PUBLIC_URL}/images/slides/13.jpg`,
      pdf: `${process.env.PUBLIC_URL}/materials/lesson13/slide13.pdf`
    }
  ];

  const handleDownload = (pdfPath, title) => {
    try {
      const link = document.createElement('a');
      link.href = pdfPath;
      link.download = `${title}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      message.success('开始下载课件');
    } catch (error) {
      message.error('下载失败，请稍后重试');
    }
  };

  return (
    <div className="course-grid">
      <Row gutter={[24, 24]}>
        {courses.map((course, index) => (
          <Col key={index} xs={24} sm={12} md={8}>
            <Card
              hoverable
              className="course-card"
              cover={
                <div className="course-cover">
                  <img alt={course.title} src={course.cover} />
                </div>
              }
              onClick={() => handleDownload(course.pdf, course.title)}
            >
              <Card.Meta title={course.title} className="course-title" />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CourseGrid;