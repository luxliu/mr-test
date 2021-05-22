import { colors } from 'src/styles';
import styled, { css } from 'styled-components';

export const mobileWidth = 400;

export const CartContainer = styled.div`
  display: flex;
  max-width: 1500px;
  margin: auto;
  justify-content: flex-end;
  background-color: ${colors.lightGrey};
  margin-bottom: 30px;
  height: 24px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const CartWrapper = styled.div`
  margin-right: 40px;
  cursor: pointer;
  position: relative;
`;

export const MiniCart = styled.div<{ displayCartDetail: boolean }>`
  z-index: 2;
  position: absolute;
  right: 0;
  width: 80px;
  text-align: center;
  border: 1px solid transparent;

  ${({ displayCartDetail }) =>
    displayCartDetail &&
    css`
      background: white;
      border: 1px solid ${colors.borderLightGrey};
      border-bottom: none;
    `}
`;

export const CartDetail = styled.div`
  position: absolute;
  right: 0;
  border: 1px solid ${colors.borderLightGrey};
  background-color: ${colors.white};
  z-index: 1;
  top: 22px;
  width: ${mobileWidth}px;
`;

export const ProductLine = styled.div`
  display: flex;
  padding: 15px;
  width: 300px;

  img {
    width: 30%;
    margin-right: 20px;
  }
`;

export const ProductRightInfo = styled.div`
  div {
    margin-bottom: 10px;
  }
`;

export const Price = styled.span`
  font-weight: bold;
`;
