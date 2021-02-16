import styled from "styled-components";
export const CardProfile = styled.div`
  border-radius: 2%;
  width: 250px;
  height: 100%;
  border: 1px solid gray;
  margin-left: 30px;
  margin-top: 30px;
`;
export const FirstFont = styled.span`
  color: black;
  font-size: 16px;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  display: block;
  padding: 5px;
`;
export const ImgProfile = styled.img`
  border-radius: 50%;
  width: 50%;
`;

export const SecondFont = styled.span`
  color: grey;
  font-size: 14px;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  display: block;
  padding: 3px;
`;

export const DescriptionDiv = styled.div`
  text-align: center;
  background-color: #ffffff;
  padding: 30px;
`;

export const Stats = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-between;
  background-color: lightgray;
`;

export const List = styled.li`
  border-top: 0.5px solid gray;
  border-radius: 2%;
  &:nth-last-child(n + 2) {
    border-right: 0.5px solid gray;
  }
  text-align: center;
  padding: 5px;
`;
