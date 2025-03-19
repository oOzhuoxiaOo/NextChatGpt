import { Layout } from 'antd';
import './globals.css';
import './scrollbar.css'; // Import custom scrollbar styles
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { Content, Header } from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';

const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 48,
  lineHeight: '64px',
  backgroundColor: '#212121',
};

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  height: '100%',
  fontSize: 16,
  color: '#fff',
  width: '100%',
  backgroundColor: '#212121',
};

const siderStyle: React.CSSProperties = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#171717',
};

const layoutStyle = {
  height: '100vh',
  borderRadius: 8,
  overflow: 'hidden',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Layout style={layoutStyle}>
          <Sider style={siderStyle}>sider</Sider>
          <Layout>
            <Header style={headerStyle}>header</Header>
            <Content style={contentStyle}>
              <AntdRegistry>{children}</AntdRegistry>
            </Content>
          </Layout>
        </Layout>
      </body>
    </html>
  );
}
