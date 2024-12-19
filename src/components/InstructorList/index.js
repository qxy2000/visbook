import React from 'react';
import { Card } from 'antd';
import './index.scss';

const instructors = [
  { 
    name: "曹楠",
    avatar: `${process.env.PUBLIC_URL}/images/instructors/caonan.png`,
    homepage: "https://nancao.org/"
  },
  {
    name: "陈晴",
    avatar: `${process.env.PUBLIC_URL}/images/instructors/chenqing.png`,
    homepage: "https://tjdi.tongji.edu.cn/TeacherDetail.do?id=5056&lang="
  },
  {
    name: "石洋",
    avatar: `${process.env.PUBLIC_URL}/images/instructors/shiyang.png`,
    homepage: "https://xiaoyangtao.github.io/"
  },
  {
    name: "曹世雄",
    avatar: `${process.env.PUBLIC_URL}/images/instructors/caoshixiong.png`,
    homepage: ""
  }
];

const InstructorList = () => {
  const renderInstructor = (instructor, index) => {
    const card = (
      <Card className="instructor-card" bordered={false}>
        <div className="avatar-wrapper">
          <img 
            src={instructor.avatar} 
            alt={`${instructor.name}的头像`} 
            className="avatar"
          />
        </div>
        <h3 className="instructor-name">{instructor.name}</h3>
      </Card>
    );

    // 当homepage存在且不为空时，才添加链接
    if (instructor.homepage && instructor.homepage.trim() !== '') {
      return (
        <a 
          href={instructor.homepage}
          target="_blank"
          rel="noopener noreferrer"
          key={index}
        >
          {card}
        </a>
      );
    }

    // 否则直接返回卡片
    return <div key={index}>{card}</div>;
  };

  return (
    <div className="instructor-list">
      <div className="instructor-grid">
        {instructors.map((instructor, index) => 
          renderInstructor(instructor, index)
        )}
      </div>
    </div>
  );
};

export default InstructorList;