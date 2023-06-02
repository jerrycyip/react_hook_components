import { MdDoneOutline, MdShoppingCartCheckout, MdCheckBoxOutlineBlank, MdMoneyOff  } from "react-icons/md";

import Button from '../components/Button';

function ButtonPage() {

  const handleClick = () => {
    console.log('clicked!');
  }

  return (
    <div>
      <div>
        <Button success rounded outline onClick={handleClick} className='mb-5'>
          <MdDoneOutline />
          Click me!
        </Button>
      </div>
      <div>
        <Button outline danger>
          <MdShoppingCartCheckout />
          Buy Now!
        </Button>
      </div>
      <div>
        <Button warning>
          <MdMoneyOff />
          See Deal!
        </Button>
      </div>
      <div>
        <Button secondary outline>Hide Ads!</Button>
      </div>
      <div>
        <Button secondary rounded>
          <MdCheckBoxOutlineBlank />
          Something!
        </Button>
      </div>            
    </div>
  );
}

export default ButtonPage;