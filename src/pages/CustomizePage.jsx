import { CustomItem, CustomItemCart } from '../components';

export const CustomizePage = () => {

  return (
    <>
      <div className="page-container">

        <div className='custom-page-container'>
          <div className='page-subcontainer'>

            <CustomItem ingredientType="Caldos" />

          </div>

          <div className='custom-item-cart'>
            <CustomItemCart />

          </div>
        </div>





      </div>


    </>
  );
}

