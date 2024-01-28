import { CardMenu } from '../index'
import { AppContext } from '../../context';
import { useContext } from 'react';

export const Category = ({ data, title }) => {

  const { t } = useContext(AppContext);

    return (
        <>
          <h2 className="card-title">- {t(title)} -</h2>
          <div className="card-container">
            {data.map((item, index) => (<CardMenu  key={index} {...item} />))}
          </div>
        </>
      )
}
