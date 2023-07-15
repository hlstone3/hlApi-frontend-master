import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import '@umijs/max';
const Footer: React.FC = () => {
  const defaultMessage = 'stone';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'Hl API',
          title: 'HlApi',
          href: '',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/hlstone3',
          blankTarget: true,
        },
        {
          key: 'stonebk',
          title: 'stone博客',
          href: '',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
