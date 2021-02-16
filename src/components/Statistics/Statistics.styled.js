import styled from "styled-components";
const randomColor = () => {
  return `  rgb(
      ${Math.floor(Math.random() * 255)},
      ${Math.floor(Math.random() * 255)},
      ${Math.floor(Math.random() * 255)}
    );`;
};

export const SectionStatistics = styled.section`
  border-radius: 2%;
  width: 270px;
  height: 100%;
  border: 1px solid gray;
  margin: 10px;
  text-align: center;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  color: gray;
`;
export const FirstFont = styled.span`
  color: #ffffff;
  font-size: 14px;
  display: block;
  padding: 5px;
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-around;
  background-color: lightgray;
`;

export const ListItem = styled.li`
  width: 25%;
  background-color: ${() => randomColor()};
  text-align: center;
`;
