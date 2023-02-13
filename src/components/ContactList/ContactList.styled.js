import styled from '@emotion/styled';

export const StyledContactList = styled.ul`
  padding-left: 18px;
  list-style: disc;

  li {
    margin-bottom: 8px;

    span {
      font-size: 18px;
    }

    button {
      margin-left: 16px;
      padding: 4px;
      height: 32px;
      width: 120px;
      background-color: #fff;
      border: 2px solid #c2c2c2;
      font-weight: 600;
      color: #000;

      border-radius: 4px;
      transition: background-color 0.25s ease-in-out, color 0.25s ease-in-out;

      :hover,
      :focus {
        background-color: green;
        color: #fff;
      }
    }
  }
`;
