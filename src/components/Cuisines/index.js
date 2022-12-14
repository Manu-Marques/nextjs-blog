import './styles.scss';
import { NavLink } from 'react-router-dom';
import Bureau from '../../../src/assets/bureau.jpg';

export default function Cuisines(results) {

  return (
    <div className="main">
      <h1>Cuisines</h1>
      <div className="row1">
        {results.results?.map((result) => {
          return (
            <div key={result.id} className="image">
              <img src={Bureau} alt="" />
              <div className="details">
                <h2>{result.title}</h2>
                <p>{result.description}</p>
                <div className="more">
                  <NavLink
                    to={`/cuisines/product/${result.title}`}
                    className="read-more"
                  >
                    En savoir plus
                  </NavLink>
                  <div className="icon-links"></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
