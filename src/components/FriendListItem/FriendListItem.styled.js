import styled from "styled-components";
export const Item = styled.li`
  width: 404px;
  height: 116px;
  display: flex;
  align-items: center;
  box-shadow: 3px 6px 15px 1px lightgray;
  margin-bottom: 17px;
`;
export const Status = styled.span`
  display: block;
  border-radius: 50%;
  width: 26px;
  height: 26px;
  background-color: ${({ isOnline }) => {
    if (isOnline) {
      return "green";
    } else {
      return "red";
    }
  }};
  margin: 10px;
`;

export const Img = styled.img`
  width: 98px;
  border-radius: 6%;
  margin: 0 16px 0 16px;
`;
export const Name = styled.p`
  font-size: 34px;
  font-weight: 600;
`;
