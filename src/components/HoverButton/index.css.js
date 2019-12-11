import styled from "styled-components";

const HoverButtonWrapper = styled.div`
  display: inline-block;
  height: 40px;
  padding: 0 12px;
  border-radius: 20px;
  background-color: #5d9bd2;
  line-height: 40px;
  text-align: center;
  margin: 20px;
  cursor: pointer;
  transition: all 0.3s;
  font-size: 14px;
  overflow: hidden;

  &:hover {
    color: #ccc;
    background-color: green;

    span {
      transform: translateY(-40px);
    }
  }

  span {
    display: block;
  }
`;

export { HoverButtonWrapper };
