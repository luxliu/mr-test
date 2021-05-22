import { Button } from 'antd';
import styled, { css } from 'styled-components';

import { colors } from 'src/styles';
import { flexCenter } from 'src/styles/mixins';

const productTextBlack = css`
  color: ${colors.textBlack};
`;

const productTextGrey = css`
  color: ${colors.textGrey};
`;

export const shoppingContainer = styled.div`
  max-width: 1000px;
  margin: auto;

  @media (max-width: 576px) {
    width: 400px;
  }
`;

export const ImageWrapper = styled.div`
  margin-bottom: 20px;

  ${flexCenter()}
`;

export const ProductName = styled.h2`
  ${productTextBlack}
`;

export const ProductPrice = styled.div`
  ${productTextBlack}

  margin-bottom: 30px;
`;

export const ProductDesc = styled.div`
  ${productTextGrey}

  margin-bottom: 30px;
`;

export const SizeWrapper = styled.div`
  text-transform: uppercase;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 0.1em;
  margin-bottom: 15px;

  ${productTextBlack}
`;

export const SizeTitle = styled.span`
  font-weight: 100;
  margin-right: 5px;

  ${productTextGrey}

  &:after {
    content: '*';
    color: ${colors.red};
  }
`;

export const SizeOptionWrapper = styled.div`
  text-transform: uppercase;
  margin-bottom: 15px;

  .ant-radio-button-wrapper {
    font-size: 12px;
    margin-right: 10px;
    width: 40px;
    color: ${colors.textGrey};
  }
`;

export const AddButton = styled.button`
  text-transform: uppercase;
  border: 2px solid ${colors.borderDarkGrey};
  font-weight: bold;
  letter-spacing: 0.1em;
  padding: 5px 20px;
  background-color: ${colors.white};
  cursor: pointer;

  ${productTextBlack}

  &:hover {
    background-color: ${colors.textBlack};
    color: ${colors.white};
  }
`;

export const ErrorMessage = styled.div`
  color: ${colors.red};
  font-weight: bold;
`;
