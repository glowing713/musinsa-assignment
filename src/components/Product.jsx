import { css } from '@emotion/react';
import colors from 'constants/colors';

const Product = ({
  goodsNo,
  goodsName,
  price,
  brandName,
  imageUrl,
  linkUrl,
  brandLinkUrl,
  normalPrice,
  isSale,
  saleRate,
  isSoldOut,
  isExclusive,
}) => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        width: 100%;
        overflow: hidden;
        position: relative;
        background-color: ${colors.white};
      `}
    >
      <div
        css={css`
          padding-bottom: 120%;
          position: relative;
        `}
      >
        <img
          src={imageUrl}
          alt={goodsName}
          css={css`
            width: 100%;
            position: absolute;
            left: 0;
            top: 0;
            border: 1px solid transparent;
            border-radius: 6px;
          `}
        />
        <p
          css={css`
            display: ${isExclusive ? 'block' : 'none'};
            background-color: ${colors.exclusive};
            color: ${colors.white};
            font-size: 13px;
            font-weight: 450;
            text-align: center;
            line-height: 26px;
            width: 33px;
            height: 26px;
            position: absolute;
            left: 13px;
            bottom: -13px;
            margin: 0;
          `}
        >
          단독
        </p>
      </div>
      <div
        css={css`
          padding: 0 10px;
        `}
      >
        <p
          css={css`
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            font-weight: 400;
            font-size: 12px;
            margin: 20px 0 8px 0;
          `}
        >
          {brandName}
        </p>
        <p
          css={css`
            margin: 10px 0;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            font-weight: 700;
            font-size: 14px;
            text-align: left;
          `}
        >
          {goodsName}
        </p>
        <p
          css={css`
            display: flex;
            justify-content: space-between;
            margin: 0;
          `}
        >
          <span
            css={css`
              word-break: break-all;
              line-height: 19px;
              font-weight: 500;
              font-size: 14px;
            `}
          >{`${price.toLocaleString()}원`}</span>
          <span
            css={css`
              display: ${isSale ? 'inline-block' : 'none'};
              margin-right: 6px;
              font-weight: 800;
              font-size: 14px;
              color: ${colors.sale};
            `}
          >
            {`${saleRate}%`}
          </span>
        </p>
        <p
          css={css`
            display: ${isSale ? 'inline-block' : 'none'};
            margin: 0;
            padding-bottom: 30px;
            word-break: break-all;
            line-height: 19px;
            font-weight: 400;
            font-size: 12px;
            color: #9e9e9e;
            text-align: left;
          `}
        >{`${normalPrice.toLocaleString()}원`}</p>
      </div>
    </div>
  );
};

export default Product;
