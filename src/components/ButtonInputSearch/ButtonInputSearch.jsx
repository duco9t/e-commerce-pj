import { SearchOutlined } from '@ant-design/icons';
import React from 'react';
import ButtonComponent from '../ButtonComponent/ButtonComponent';
import InputComponent from '../InputComponent/InputComponent';

const ButtonInputSearch = (props) => {
    const { size, placeholder, textButton, bordered, backgroundColorInput = '#fff', backgroundColorButton = 'rgb(13,92,182)', colorButton = '#fff' } = props;

    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <InputComponent
                size={size}
                placeholder={placeholder}
                bordered={bordered}
                style={{ backgroundColor: backgroundColorInput, borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
            />
            <ButtonComponent
                size={size}
                bordered={bordered}
                styleButton={{
                    background: backgroundColorButton,
                    color: colorButton,
                    borderTopLeftRadius: 0,
                    borderBottomLeftRadius: 0,
                    height: '100%', // Ensure it matches Input height
                    display: 'flex',
                    alignItems: 'center',
                    border: !bordered && 'none'
                }}
                icon={<SearchOutlined style={{ color: colorButton }} />}
                textButton={textButton}
                styleTextButton={{ color: colorButton }}
            />
        </div>
    );
};

export default ButtonInputSearch;
