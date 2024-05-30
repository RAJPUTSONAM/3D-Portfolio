import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { color, motion } from 'framer-motion';

import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import { services } from '../constants';
import { SectionWrapper } from '../hoc'; 
import { textVariant } from '../utils/motion';

const ServicesCard = ({ service }) => (
  <VerticalTimelineElement 
    contentStyle={{background: '#2A2F4F', color: '#fff'}}  
    contentArrowStyle={{borderRight: '7px solid #232631'}}
    iconStyle={{background: service.iconBg }}
    icon={
      <div  className='flex justify-center items-center w-full h-full'>
        <img 
          src={service.icon} 
          className='w-[60%] h-[60%] object-contain'
        />
      </div>
    }
    
  >
    <div> 
      <h3 className='service'>{service.title}</h3>
      {/* <p className='text-secondary text-[16px] font-semibold' style={{margin: 0}}>{experience}</p> */}
    </div>

    <ul className='mt-5 list-disc ml-5 space-y-2'>
    {service.points.map((point, index) => (
      <li
       key={`service-point-${index}`}
       className='text-white-100 text-[14px] pl-1 tracking-wider'
      >
        {point}
      </li>
    ))}
    </ul>   
  </VerticalTimelineElement>
)

const Services = () => {
  return (
    <>
      <motion.div variants={textVariant()} >
      <p className={styles.sectionSubText}>What we offer?</p>
        <h2 className={styles.heroHeadText}>Our Services</h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {services.map((service, index) => (
            <ServicesCard key={index} service={service} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Services, 'services')
