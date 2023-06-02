import Accordion from '../components/Accordion';

function AccordionPage() {
const items = [
  {
    id: '12dfasd',
    label: 'Can I use React on a project?',
    content: "You can use React on any project you want.  It's a great technology for building web applications and is used and loved by many developers the world over."
  },
  {
    id: '453lkadsf',
    label: 'Can I use JavaScript on a project?',
    content: "You can use JavaScript on any project you want.  It's a great technology for building web applications and is used and loved by many developers the world over."
  },
  {
    id:'akse2343',
    label: 'Can I use CSS on a project?',
    content: "You can use CSS on any project you want.  It's a great technology for building web applications and is used and loved by many developers the world over."
  }
]

  return (
    <div>
      <Accordion items={items} />          
    </div>
  );
}

export default AccordionPage;