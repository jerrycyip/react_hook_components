import Modal from '../components/Modal';
import Button from '../components/Button';
import { useState } from 'react';

function ModalPage(){
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  }

  const handleClose = () => {
    setShowModal(false);
  }

  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>
        I Accept
      </Button>
    </div>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important agreement for you to accept</p>
    </Modal>
  );

  
  return (
    <div>
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu libero convallis, egestas nibh vitae, auctor neque. Morbi rhoncus eros ac felis hendrerit, in commodo neque commodo. Aliquam egestas non risus egestas vehicula. Duis varius metus vel efficitur euismod. Morbi tincidunt libero id mauris tempus ornare. Cras feugiat ultricies lacus, accumsan consectetur nisl commodo et. Aenean ac lorem ultricies, suscipit sem vel, faucibus arcu. In hac habitasse platea dictumst. Vivamus hendrerit nibh et consequat sodales. Nulla facilisi. Etiam aliquet nisl sit amet lacus varius convallis. Vestibulum vitae mi nec libero interdum venenatis. Duis quis suscipit est. Phasellus sit amet nisi quis lectus vestibulum consectetur. In imperdiet urna ut mi ullamcorper, at viverra magna ultrices. Donec in posuere sapien, eu lobortis arcu.

Etiam eget nulla quis augue tempor hendrerit rutrum a mauris. Sed a cursus risus. Etiam vestibulum ut orci eu finibus. Nunc nec ipsum sem. Duis non ipsum convallis, sagittis sem in, laoreet elit. Mauris fringilla tortor eu rhoncus molestie. Integer tincidunt, dolor eget accumsan aliquet, risus leo scelerisque diam, sed volutpat ligula lorem vitae eros. Morbi sit amet elit egestas, accumsan lacus et, fermentum quam. Nulla mi urna, hendrerit sed purus scelerisque, tincidunt efficitur quam. Quisque vehicula, mauris suscipit pellentesque feugiat, massa lacus dictum sem, eu lacinia magna nibh quis sem. Fusce vel bibendum leo, nec aliquam mauris. Curabitur sed nulla eget nibh lacinia tristique.

Phasellus nisi elit, iaculis sit amet risus eu, facilisis consectetur ipsum. Cras tincidunt, arcu quis ultricies fringilla, metus lectus semper nunc, eget volutpat enim nulla sit amet odio. Vivamus laoreet mi mattis erat aliquet ullamcorper. Aliquam congue congue mauris a molestie. Donec varius mi id dictum vehicula. Sed purus magna, ullamcorper quis elit ultrices, dapibus mollis leo. Curabitur ultricies eu nibh a sodales. Nunc rutrum purus sit amet nisl volutpat, quis congue dolor accumsan. Nunc mi quam, mollis nec sodales at, sodales id elit.

Aenean eu porta enim, sit amet bibendum sem. Suspendisse potenti. Morbi vulputate vulputate fermentum. Donec a velit ligula. Nam viverra nunc at quam vulputate, id pellentesque felis pulvinar. Fusce id libero nec libero dictum placerat sit amet a nunc. Suspendisse purus libero, dignissim ut arcu sed, aliquam luctus dui. Quisque dignissim neque sed elit fringilla, eu dapibus metus maximus. Vestibulum eu tortor lacus. Pellentesque tincidunt lacus felis, vitae facilisis massa tristique eget. Mauris elementum purus ac velit commodo dictum at quis felis.

Pellentesque quam nibh, elementum eget lorem sit amet, eleifend rutrum eros. Nulla pulvinar volutpat urna, dapibus congue ipsum mollis sagittis. Donec non tincidunt mi. Vestibulum sit amet orci vel dolor molestie laoreet. Vivamus ex nisi, finibus a leo sed, varius pulvinar nulla. Suspendisse quis varius neque, nec rutrum augue. Morbi ultricies, diam sit amet consequat vulputate, eros nisi eleifend erat, a porttitor dui nunc in velit. Pellentesque eu leo sed elit semper vehicula ut in est. Nam posuere augue eu elit rutrum scelerisque. In hendrerit pulvinar purus ac laoreet. Nullam fermentum mauris enim. Suspendisse luctus in purus eu aliquet. Vestibulum ac felis ligula. Etiam vel ornare purus, sed viverra tortor. Aenean in neque eget risus porttitor fringilla nec id elit.
      </p>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu libero convallis, egestas nibh vitae, auctor neque. Morbi rhoncus eros ac felis hendrerit, in commodo neque commodo. Aliquam egestas non risus egestas vehicula. Duis varius metus vel efficitur euismod. Morbi tincidunt libero id mauris tempus ornare. Cras feugiat ultricies lacus, accumsan consectetur nisl commodo et. Aenean ac lorem ultricies, suscipit sem vel, faucibus arcu. In hac habitasse platea dictumst. Vivamus hendrerit nibh et consequat sodales. Nulla facilisi. Etiam aliquet nisl sit amet lacus varius convallis. Vestibulum vitae mi nec libero interdum venenatis. Duis quis suscipit est. Phasellus sit amet nisi quis lectus vestibulum consectetur. In imperdiet urna ut mi ullamcorper, at viverra magna ultrices. Donec in posuere sapien, eu lobortis arcu.

Etiam eget nulla quis augue tempor hendrerit rutrum a mauris. Sed a cursus risus. Etiam vestibulum ut orci eu finibus. Nunc nec ipsum sem. Duis non ipsum convallis, sagittis sem in, laoreet elit. Mauris fringilla tortor eu rhoncus molestie. Integer tincidunt, dolor eget accumsan aliquet, risus leo scelerisque diam, sed volutpat ligula lorem vitae eros. Morbi sit amet elit egestas, accumsan lacus et, fermentum quam. Nulla mi urna, hendrerit sed purus scelerisque, tincidunt efficitur quam. Quisque vehicula, mauris suscipit pellentesque feugiat, massa lacus dictum sem, eu lacinia magna nibh quis sem. Fusce vel bibendum leo, nec aliquam mauris. Curabitur sed nulla eget nibh lacinia tristique.

Phasellus nisi elit, iaculis sit amet risus eu, facilisis consectetur ipsum. Cras tincidunt, arcu quis ultricies fringilla, metus lectus semper nunc, eget volutpat enim nulla sit amet odio. Vivamus laoreet mi mattis erat aliquet ullamcorper. Aliquam congue congue mauris a molestie. Donec varius mi id dictum vehicula. Sed purus magna, ullamcorper quis elit ultrices, dapibus mollis leo. Curabitur ultricies eu nibh a sodales. Nunc rutrum purus sit amet nisl volutpat, quis congue dolor accumsan. Nunc mi quam, mollis nec sodales at, sodales id elit.

Aenean eu porta enim, sit amet bibendum sem. Suspendisse potenti. Morbi vulputate vulputate fermentum. Donec a velit ligula. Nam viverra nunc at quam vulputate, id pellentesque felis pulvinar. Fusce id libero nec libero dictum placerat sit amet a nunc. Suspendisse purus libero, dignissim ut arcu sed, aliquam luctus dui. Quisque dignissim neque sed elit fringilla, eu dapibus metus maximus. Vestibulum eu tortor lacus. Pellentesque tincidunt lacus felis, vitae facilisis massa tristique eget. Mauris elementum purus ac velit commodo dictum at quis felis.

Pellentesque quam nibh, elementum eget lorem sit amet, eleifend rutrum eros. Nulla pulvinar volutpat urna, dapibus congue ipsum mollis sagittis. Donec non tincidunt mi. Vestibulum sit amet orci vel dolor molestie laoreet. Vivamus ex nisi, finibus a leo sed, varius pulvinar nulla. Suspendisse quis varius neque, nec rutrum augue. Morbi ultricies, diam sit amet consequat vulputate, eros nisi eleifend erat, a porttitor dui nunc in velit. Pellentesque eu leo sed elit semper vehicula ut in est. Nam posuere augue eu elit rutrum scelerisque. In hendrerit pulvinar purus ac laoreet. Nullam fermentum mauris enim. Suspendisse luctus in purus eu aliquet. Vestibulum ac felis ligula. Etiam vel ornare purus, sed viverra tortor. Aenean in neque eget risus porttitor fringilla nec id elit.
      </p>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu libero convallis, egestas nibh vitae, auctor neque. Morbi rhoncus eros ac felis hendrerit, in commodo neque commodo. Aliquam egestas non risus egestas vehicula. Duis varius metus vel efficitur euismod. Morbi tincidunt libero id mauris tempus ornare. Cras feugiat ultricies lacus, accumsan consectetur nisl commodo et. Aenean ac lorem ultricies, suscipit sem vel, faucibus arcu. In hac habitasse platea dictumst. Vivamus hendrerit nibh et consequat sodales. Nulla facilisi. Etiam aliquet nisl sit amet lacus varius convallis. Vestibulum vitae mi nec libero interdum venenatis. Duis quis suscipit est. Phasellus sit amet nisi quis lectus vestibulum consectetur. In imperdiet urna ut mi ullamcorper, at viverra magna ultrices. Donec in posuere sapien, eu lobortis arcu.

Etiam eget nulla quis augue tempor hendrerit rutrum a mauris. Sed a cursus risus. Etiam vestibulum ut orci eu finibus. Nunc nec ipsum sem. Duis non ipsum convallis, sagittis sem in, laoreet elit. Mauris fringilla tortor eu rhoncus molestie. Integer tincidunt, dolor eget accumsan aliquet, risus leo scelerisque diam, sed volutpat ligula lorem vitae eros. Morbi sit amet elit egestas, accumsan lacus et, fermentum quam. Nulla mi urna, hendrerit sed purus scelerisque, tincidunt efficitur quam. Quisque vehicula, mauris suscipit pellentesque feugiat, massa lacus dictum sem, eu lacinia magna nibh quis sem. Fusce vel bibendum leo, nec aliquam mauris. Curabitur sed nulla eget nibh lacinia tristique.

Phasellus nisi elit, iaculis sit amet risus eu, facilisis consectetur ipsum. Cras tincidunt, arcu quis ultricies fringilla, metus lectus semper nunc, eget volutpat enim nulla sit amet odio. Vivamus laoreet mi mattis erat aliquet ullamcorper. Aliquam congue congue mauris a molestie. Donec varius mi id dictum vehicula. Sed purus magna, ullamcorper quis elit ultrices, dapibus mollis leo. Curabitur ultricies eu nibh a sodales. Nunc rutrum purus sit amet nisl volutpat, quis congue dolor accumsan. Nunc mi quam, mollis nec sodales at, sodales id elit.

Aenean eu porta enim, sit amet bibendum sem. Suspendisse potenti. Morbi vulputate vulputate fermentum. Donec a velit ligula. Nam viverra nunc at quam vulputate, id pellentesque felis pulvinar. Fusce id libero nec libero dictum placerat sit amet a nunc. Suspendisse purus libero, dignissim ut arcu sed, aliquam luctus dui. Quisque dignissim neque sed elit fringilla, eu dapibus metus maximus. Vestibulum eu tortor lacus. Pellentesque tincidunt lacus felis, vitae facilisis massa tristique eget. Mauris elementum purus ac velit commodo dictum at quis felis.

Pellentesque quam nibh, elementum eget lorem sit amet, eleifend rutrum eros. Nulla pulvinar volutpat urna, dapibus congue ipsum mollis sagittis. Donec non tincidunt mi. Vestibulum sit amet orci vel dolor molestie laoreet. Vivamus ex nisi, finibus a leo sed, varius pulvinar nulla. Suspendisse quis varius neque, nec rutrum augue. Morbi ultricies, diam sit amet consequat vulputate, eros nisi eleifend erat, a porttitor dui nunc in velit. Pellentesque eu leo sed elit semper vehicula ut in est. Nam posuere augue eu elit rutrum scelerisque. In hendrerit pulvinar purus ac laoreet. Nullam fermentum mauris enim. Suspendisse luctus in purus eu aliquet. Vestibulum ac felis ligula. Etiam vel ornare purus, sed viverra tortor. Aenean in neque eget risus porttitor fringilla nec id elit.
      </p>            
    </div>
  );
}

export default ModalPage;