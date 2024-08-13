import { Col, Flex, Space, Typography } from 'antd';
import { createStyles } from 'antd-style';
import classNames from 'classnames';
import { FormattedMessage, useRouteMeta } from 'dumi';
import React, {  useLayoutEffect, useMemo, useState } from 'react';
import useLayoutState from '../../../hooks/useLayoutState';
import useLocation from '../../../hooks/useLocation';
import ComponentMeta from '../../builtins/ComponentMeta';
import type { DemoContextProps } from '../DemoContext';
import DemoContext from '../DemoContext';
import InViewSuspense from './InViewSuspense';


const DocAnchor = React.lazy(() => import('./DocAnchor'));
const DocMeta = React.lazy(() => import('./DocMeta'));
const Footer = React.lazy(() => import('../Footer'));
const PrevAndNext = React.lazy(() => import('../../common/PrevAndNext'));
const ComponentChangelog = React.lazy(
  () => import('../../common/ComponentChangelog'),
);
const EditButton = React.lazy(() => import('../../common/EditButton'));

const useStyle = createStyles(({  css }) => ({
  articleWrapper: css`
    padding: 0 170px 32px 64px;
  `,
}));

const Content: React.FC<React.PropsWithChildren> = ({ children }) => {
  const meta = useRouteMeta();
  const { pathname, hash } = useLocation();
  const { styles } = useStyle();

  const [showDebug, setShowDebug] = useLayoutState(false);
  const [codeType, setCodeType] = useState('tsx');
  const debugDemos = useMemo(
    () =>
      meta.toc?.filter((item) => item._debug_demo).map((item) => item.id) || [],
    [meta],
  );

  const isDebugDemo = debugDemos.includes(hash.slice(1));

  useLayoutEffect(() => {
    setShowDebug(process.env.NODE_ENV === 'development' || isDebugDemo);
  }, []);

  const contextValue = useMemo<DemoContextProps>(
    () => ({ showDebug, setShowDebug, codeType, setCodeType }),
    [showDebug, codeType, debugDemos],
  );




  return (
    <DemoContext.Provider value={contextValue}>
      <Col xxl={20} xl={19} lg={18} md={18} sm={24} xs={24}>
        <InViewSuspense fallback={null}>
          <DocAnchor showDebug={showDebug} debugDemos={debugDemos} />
        </InViewSuspense>
        <article className={classNames(styles.articleWrapper)}>
          {meta.frontmatter?.title ? (
            <Flex justify="space-between">
              <Typography.Title style={{ fontSize: 32, position: 'relative' }}>
                <Space>
                  <span>{meta.frontmatter?.title}</span>
                  <span>{meta.frontmatter?.subtitle}</span>
                  {!pathname.startsWith('/components/overview') && (
                    <InViewSuspense fallback={null}>
                      <EditButton
                        title={<FormattedMessage id="app.content.edit-page" />}
                        filename={meta.frontmatter.filename}
                      />
                    </InViewSuspense>
                  )}
                </Space>
              </Typography.Title>
              {pathname.startsWith('/components/') && (
                <InViewSuspense fallback={null}>
                  <ComponentChangelog pathname={pathname} />
                </InViewSuspense>
              )}
            </Flex>
          ) : null}

          <InViewSuspense fallback={null}>
            <DocMeta />
          </InViewSuspense>


          {/* Import Info */}
          {meta.frontmatter.category === 'Components' &&
            String(meta.frontmatter.showImport) !== 'false' && (
              <ComponentMeta
                source
                component={meta.frontmatter.title}
                filename={meta.frontmatter.filename}
                version={meta.frontmatter.tag}
              />
            )}
          <div
            style={{
              minHeight: 'calc(100vh - 64px)',
              width: 'calc(100% - 10px)',
            }}
          >
            {children}
          </div>


        </article>
        <InViewSuspense fallback={null}>
          <PrevAndNext  />
        </InViewSuspense>
        <Footer />
      </Col>
    </DemoContext.Provider>
  );
};

export default Content;
