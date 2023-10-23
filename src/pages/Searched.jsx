import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { styled } from "styled-components";

const Searched = () => {
  const [searchedRecipies, setSearchedRecipies] = useState([]);
  let params = useParams();

  const getSearched = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
    );
    const recipes = await data.json();
    setSearchedRecipies(recipes.results);
  };

  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);

  return (
    <Grid>
      {searchedRecipies.map((item) => {
        return (
          <Card key={item.id}>
            <Link to={"/recipe/" + item.id}>
              <img src={item.image} alt={item.title} />
              <h4>{item.title}</h4>
            </Link>
          </Card>
        );
      })}
    </Grid>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
  grid-gap: 2rem;
`;

const Card = styled.div`
  img {
    width: 100%;
    border-radius: 1rem;
    object-fit: cover;
  }

  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`;

export default Searched;
