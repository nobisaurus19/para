import DefaultLayout from '../layout/DefaultLayout';
import './index.css';

function Moreinfo() {
  return (
    <DefaultLayout>
        <div className="moreinformation">
          <img src={`${process.env.PUBLIC_URL}/moreinfobox.png`} alt="duck1" className="infobox" />
          <p className="appname">KOHUB</p>
          <p className="kohubmoreinfo">
            In today's fast-paced world, remote work has become increasingly popular, and with it, the demand for co-working spaces has also risen. However,
            finding the perfect co-working space that meets one's needs can be a daunting task. This is where KoHub comes in - an application designed to provide a one-stop solution for all co-working needs.
	           KoHub's key objective is to offer a diverse range of co-working spaces, catering to the individual needs of different types of workers, including freelancers, and remote employees.
             The platform aims to offer a vast selection of workspaces ranging from shared desks, conference rooms, and more. With a comprehensive list of co-working spaces at different price points, KoHub can help users find the right workspace that fits their budget.
            </p>
        </div>
    </DefaultLayout>
  );
}

export default Moreinfo;