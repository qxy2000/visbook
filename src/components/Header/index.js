import React from 'react';
import { Input, Card } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import './index.scss';

const Header = () => {
  return (
    <>
      {/* 顶部导航 */}
      <div className="nav-bar">
        <div className="nav-content">
          <div className="logo">VISBOOK</div>
        </div>
      </div>

      {/* 主要内容区 */}
      <div className="header-content">
        {/* 标题区域 */}
        <div className="title-section">
          <h1 className="main-title">信息可视化导论</h1>
          <h2 className="sub-title">Introduction to Information Visualization</h2>
          
          <div className="description">
            <p className="desc-text">
            《信息可视化导论》以信息可视化的基本理论为主线，结合可视化设计和数据处理的预备知识，系统阐述了信息可视化的核心内容。书籍共十一章，分为两个部分，前五章为信息可视化的基础知识，内容涵盖引言、数据及数据分析基础、信息可视化设计的基本设计准则、交互技术与动画以及可视化的评估方法；第六到十一章为面向不同数据类型的可视化，内容涵盖内容涵盖引言、数据及数据分析基础、信息可视化设计的基本设计准则、交互技术与动画、多维数据可视化、树形和图形数据可视化、文本数据和地理信息可视化、时序数据可视化等方面，同时也详细介绍了可视化的评估方法，整本书籍内容深入探讨了可视化表达方式与实践应用。
            </p>
            <p className="desc-text">
            同时我们也针对书籍内容录制了相应的视频课程。注重基本概念、原理和方法的介绍，弱化复杂技术推导，突出实践中的应用场景，适合计算机科学、数据科学及信息技术相关专业的本科生、研究生作为教材使用，同时也可供从事数据分析和信息可视化的科技人员参考。
            </p>
          </div>
        </div>

        {/* 课程特点 */}
        <div className="course-features-wrapper">
          <div className="course-features">
            <Card bordered={false} className="feature-card">
              <div className="feature-content">
                <h3 className="feature-title">11个章节</h3>
                <p className="feature-desc">全书共11个章节，全面深入的讲解信息可视化相关知识</p>
              </div>
            </Card>
            <Card bordered={false} className="feature-card">
              <div className="feature-content">
                <h3 className="feature-title">14节视频内容</h3>
                <p className="feature-desc">课程涵盖14节视频内容，全面掌握知识点</p>
              </div>
            </Card>
            <Card bordered={false} className="feature-card">
              <div className="feature-content">
                <h3 className="feature-title">900分钟课程</h3>
                <p className="feature-desc">精心打磨课程，深入浅出，带你逐步掌握每一个知识点</p>
              </div>
            </Card>
            <Card bordered={false} className="feature-card">
              <div className="feature-content">
                <h3 className="feature-title">丰富的课后习题</h3>
                <p className="feature-desc">配备丰富的课后练习，帮助你巩固所学内容，加深理解</p>
              </div>
            </Card>
            <Card bordered={false} className="feature-card">
              <div className="feature-content">
                <h3 className="feature-title">高质量的课件</h3>
                <p className="feature-desc">高质量的课件内容，经过精心设计，助你高效学习</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;