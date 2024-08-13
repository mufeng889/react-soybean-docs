import { CalendarOutlined } from '@ant-design/icons';
import {  Flex,Typography } from 'antd';
import DayJS from 'dayjs';
import { useRouteMeta } from 'dumi';
import React from 'react';

const DocMeta: React.FC = () => {
  const meta = useRouteMeta();

  if (!meta.frontmatter.date) {
    return null;
  }

  return (
    <Typography.Paragraph>
      <Flex gap="small">
        {meta.frontmatter.date && (
          <span style={{ opacity: 0.65 }}>
            <CalendarOutlined />{' '}
            {DayJS(meta.frontmatter.date).format('YYYY-MM-DD')}
          </span>
        )}

      </Flex>
    </Typography.Paragraph>
  );
};

export default DocMeta;
