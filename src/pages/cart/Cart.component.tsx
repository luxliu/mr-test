import React, { useEffect, useState } from 'react';
import { ShoppingCartOutlined } from '@ant-design/icons';

import * as Styled from './cart.styled';
import { useDispatch, useSelector } from 'react-redux';
import { productsSelector } from './cart.selector';
import { deleteProduct } from './cart.duck';

const CartComponent = () => {
  const [displayCartDetail, setDisplayCartDetail] = useState(false);
  const [displayCartIcon, setDisplayCartIcon] = useState(false);

  const dispatch = useDispatch();

  const products = useSelector(productsSelector);
  const totalQuantity = products.reduce((acc, cur) => acc + cur.quantity, 0);

  const updateCartIcon = () => {
    if (window.innerWidth < 768) {
      setDisplayCartIcon(true);
    } else {
      setDisplayCartIcon(false);
    }
  };

  const onDelete = (id: string) => {
    dispatch(deleteProduct(id));
  };

  useEffect(() => {
    updateCartIcon();
    window.addEventListener('resize', updateCartIcon);

    return () => window.removeEventListener('resize', updateCartIcon);
  }, []);

  return (
    <Styled.CartContainer>
      <Styled.CartWrapper
        onMouseOver={() => !displayCartIcon && setDisplayCartDetail(true)}
        onMouseLeave={() => !displayCartIcon && setDisplayCartDetail(false)}
        onClick={() =>
          displayCartIcon && setDisplayCartDetail(!displayCartDetail)
        }
      >
        <Styled.MiniCart displayCartDetail={displayCartDetail}>
          {displayCartIcon ? <ShoppingCartOutlined /> : 'My Cart'}(
          {totalQuantity})
        </Styled.MiniCart>
        {displayCartDetail && (
          <Styled.CartDetail>
            {products.map((product) => (
              <Styled.ProductLine key={`${product.id}-${product.size}`}>
                <>
                  <img src={product.image} />
                  <Styled.ProductRightInfo>
                    <div>{product.name}</div>
                    <div>
                      {`${product.quantity}x `}
                      <Styled.Price>
                        ${(Math.round(product.price * 100) / 100).toFixed(2)}
                      </Styled.Price>
                    </div>
                    <div>Size: {product.size}</div>
                  </Styled.ProductRightInfo>
                  <button onClick={() => onDelete(product.id)}>delete</button>
                </>
              </Styled.ProductLine>
            ))}
          </Styled.CartDetail>
        )}
      </Styled.CartWrapper>
    </Styled.CartContainer>
  );
};

export default CartComponent;
