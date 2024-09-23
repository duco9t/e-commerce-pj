import { CaretDownOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import { Col } from 'antd';
import React from 'react';
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch.jsx';
import { WrapperHeader, WrapperHeaderAccount, WrapperTextHeader, WrapperTextHeaderSmall } from './style';



const HeaderComonent = () => {
  return (
    <div>
      <WrapperHeader gutter={16}>
        <Col span={6}>
          <WrapperTextHeader>
            LAPTRINHQUAKHO
          </WrapperTextHeader>
        </Col>
        <Col span={12}>
          <ButtonInputSearch
            size="large"
            bordered={false}
            textButton="Tìm kiếm"
            placeholder="input search text"
          />
        </Col>
        <Col span={6} style={{ display: 'flex', gap: '20px' }}>
          <WrapperHeaderAccount>
            <UserOutlined style={{ fontSize: '30px' }} />
            <div>
              <WrapperTextHeaderSmall>Đăng nhập/Đăng kí</WrapperTextHeaderSmall>
              <div>
                <WrapperTextHeaderSmall>Tài khoản</WrapperTextHeaderSmall>
                <CaretDownOutlined />
              </div>
            </div>
          </WrapperHeaderAccount>
          <WrapperHeaderAccount>
            <ShoppingCartOutlined style={{ fontSize: '30px', color: '#fff' }} />
            <WrapperTextHeaderSmall>Giỏ hàng</WrapperTextHeaderSmall>
          </WrapperHeaderAccount>
        </Col>
      </WrapperHeader>
    </div>
  )
}

export default HeaderComonent
