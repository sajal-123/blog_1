import { Link } from 'react-router-dom';
import { BreadTypeInterface } from '../Types';

function BreadCrumbs({ data }:{data:BreadTypeInterface[]}) {
  return (
    <div className='flex items-center py-4 overflow-x-auto whitespace-nowrap'>
      {data.map((item, index) => (
        <div key={index} className="flex items-center text-xs md:text-sm font-Roboto">
          <Link to={item.link} className="text-blue-500 hover:underline">
            {item.name}
          </Link>
          {index < data.length - 1 && (
            <span className="mx-2">/</span> // Add a separator between breadcrumbs
          )}
        </div>
      ))}
    </div>
  );
}

export default BreadCrumbs;
