import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import { styled } from "styled-components";
import { NavLink } from "react-router-dom";

const Category = () => {
  return (
    <List>
      <Slink to={"/cuisine/Italian"}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </Slink>
      <Slink to={"/cuisine/American"}>
        <FaHamburger />
        <h4>American</h4>
      </Slink>
      <Slink to={"/cuisine/Thai"}>
        <GiNoodles />
        <h4>Thai</h4>
      </Slink>
      <Slink to={"/cuisine/Japanese"}>
        <GiChopsticks />
        <h4>Japanese</h4>
      </Slink>
    </List>
  );
};

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
`;

const Slink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 50%;
  margin-right: 2rem;
  text-decoration: none;
  background: black;
  width: 5rem;
  height: 5rem;
  cursor: pointer;
  transform: scale(0.8);

  h4 {
    color: white;
    font-size: 0.8rem;
  }
  svg {
    color: white;
    font-size: 1.5rem;
  }
  &.active{
    background: orangered;

    svg {
      color: white;
    }
    h4 {
      color: white;
    }
  }
`;

export default Category;
