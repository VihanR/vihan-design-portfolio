import React ,{ Component }from "react";
import { FiBriefcase , FiUsers , FiMonitor } from "react-icons/fi";

const ServiceList = [
    {
        icon: <FiMonitor />,
        title: 'UI Design',
        description: 'I pride myself in designing elegant, modern and sophisticated iterfaces.'
    },
    {
        icon: <FiUsers />,
        title: 'UX Research',
        description: 'I dig deep to gather data and uncover insights. I’m addicted to empathising with users.'
    },
    {
        icon: <FiBriefcase />,
        title: 'Business Strategy',
        description: 'I love dissecting markets and competitors. I always design with business viability in mind.'
    },
]


class ServiceThree extends Component{
    render(){
        const {column } = this.props;
        const ServiceContent = ServiceList.slice(0 , this.props.item);
        
        return(
            <React.Fragment>
                <div className="row service-main-wrapper">
                    {ServiceContent.map( (val , i) => (
                        <div className={`${column}`} key={i}>
                                <div className="service service__style--2 text-left bg-gray">
                                    <div className="icon">
                                        {val.icon}
                                    </div>
                                    <div className="content">
                                        <h3 className="title">{val.title}</h3>
                                        <p>{val.description}</p>
                                    </div>
                                </div>
                        </div>
                    ))}
                </div>
            </React.Fragment>
        )
    }
}
export default ServiceThree;
