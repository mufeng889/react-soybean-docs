import { Dropdown, Space } from 'antd'
import { DownOutlined} from '@ant-design/icons'
import type { MenuProps } from 'antd'
import useLocale from '../../../hooks/useLocale';

const locales = {
  cn: {
    link: '相关链接',
    route: '路由',
    hook: 'hooks',
    faq: '常见问题',
    iteration: '迭代计划',
  },
  en: {
    link: 'Related Links',
    route: 'Route',
    hook: 'Hooks',
    faq:'FAQ',
    iteration: 'Iteration Plan',
  },
};


const ResourceLink = () => {
  const [locale] = useLocale(locales);

  const items: MenuProps['items'] = [
    {
      key: '1',
      type: 'group',
      label: 'React',
      children: [
        {
          key: '1-2',
          label:  <a   key="view"
          href="https://react-soybean-admin.vercel.app/"
          target="_blank"
          rel="noreferrer">
        在线预览
        </a>,
        },
        {
          key: '1-1',
          label:  <a   key="github"
          href="https://github.com/mufeng889/react-soybean-admin.git"
          target="_blank"
          rel="noreferrer">
         Github 仓库
        </a>,
        }
      ],
    },
    {
      key: '2',
      type: 'group',
      label: 'Vue',
      children: [
        {
          key: '2-2',
          label:  <a   key="NaiveUIView"
          href="https://naive.soybeanjs.cn"
          target="_blank"
          rel="noreferrer">
       在线预览(NaiveUI)
        </a>,
        },
        {
          key: '2-1',
          label:  <a   key="AntDesignVueView"
          href="https://antd.soybeanjs.cn"
          target="_blank"
          rel="noreferrer">
       在线预览(AntDesignVue)
        </a>,
        },
        {
          key: '2-3',
          label:  <a   key="VueGithub"
          href="https://github.com/soybeanjs/soybean-admin"
          target="_blank"
          rel="noreferrer">
     Github 仓库
        </a>,
        },
        {
          key: '2-4',
          label:  <a   key="VueGitee"
          href="https://gitee.com/honghuangdc/soybean-admin"
          target="_blank"
          rel="noreferrer">
     Gitee 仓库
          </a>,

        },
        {
          key: '2-5',
          label:  <a   key="legacy"
          href="https://legacy-docs.soybeanjs.cn"
          target="_blank"
          rel="noreferrer">
    旧版文档
          </a>,

        }
      ],
    },
  ];

  return (
    <Dropdown menu={{ items }}>
      <Space  className='cur-pointer'>
          {locale.link}
        <DownOutlined />
      </Space>
  </Dropdown>
  )
}

export default ResourceLink
