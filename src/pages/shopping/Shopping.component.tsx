import { Col, Radio, Row } from 'antd';
import React, { useEffect, useState } from 'react';

import * as Styled from './shopping.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../cart/cart.duck';
import { getProductSucceed } from './shopping.duck';
import { productSelector } from './shopping.selector';
import { Product } from './types';

const ShoppingComponent = () => {
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const product = useSelector(productSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductSucceed({} as Product));
  }, []);

  const { name, price, description, sizeOptions, image } = product || {};

  const onSizeChange = (e) => setSelectedSize(e.target.value);

  const onAddToCart = () => {
    setErrorMessage('');

    if (!selectedSize) {
      setErrorMessage('Please choose a size');
      return;
    }
    dispatch(addToCart({ ...product, size: selectedSize, quantity: 1 }));
  };

  return (
    <>
      <Styled.shoppingContainer>
        <Row>
          <Col sm={10} xs={24}>
            <Styled.ImageWrapper>
              <img src={image} width="400" />
            </Styled.ImageWrapper>
          </Col>
          <Col sm={14} xs={24}>
            <Styled.ProductName>{name}</Styled.ProductName>
            <Styled.ProductPrice>
              ${(Math.round(price * 100) / 100).toFixed(2)}
            </Styled.ProductPrice>
            <Styled.ProductDesc>{description}</Styled.ProductDesc>
            <Styled.SizeWrapper>
              <Styled.SizeTitle>Size</Styled.SizeTitle>
              {selectedSize}
            </Styled.SizeWrapper>
            <Styled.SizeOptionWrapper>
              <Radio.Group
                options={sizeOptions?.map((size) => ({
                  label: size,
                  value: size,
                }))}
                onChange={onSizeChange}
                value={selectedSize}
                optionType="button"
              />
            </Styled.SizeOptionWrapper>
            <div>
              <Styled.AddButton onClick={onAddToCart}>
                add to cart
              </Styled.AddButton>
              <Styled.ErrorMessage>{errorMessage}</Styled.ErrorMessage>
            </div>
          </Col>
        </Row>
      </Styled.shoppingContainer>
    </>
  );
};

export default ShoppingComponent;
