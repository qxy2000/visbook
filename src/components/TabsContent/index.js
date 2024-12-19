import React from 'react';
import { Tabs } from 'antd';
import InstructorList from '../InstructorList';
import CourseOutline from '../CourseOutline';
import CourseGrid from '../CourseGrid';
import './index.scss';

const TabsContent = () => {
  const items = [
    {
      key: '1',
      label: '作者',
      children: <InstructorList />,
    },
    {
      key: '2',
      label: '课程大纲',
      children: <CourseOutline />,
    },
    {
      key: '3',
      label: '课件',
      children: <CourseGrid />,
    },
  ];

  return (
    <div className="tabs-content">
      <Tabs 
        defaultActiveKey="1" 
        items={items}
        className="custom-tabs"
      />
    </div>
  );
};

export default TabsContent;