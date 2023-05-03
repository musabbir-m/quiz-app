import React from 'react';
import { Card } from 'antd';
const { Meta } = Card;
import "./CategoryCard.css" 

const CategoryCard = ({data}) => {
    
    return (
    //     <Card
    //     hoverable
    //     style={{ width: 240 }}
    //     cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
    //   >
    //     <button>hi</button>
    //     <Meta title="Europe Street beat" description="www.instagram.com" />
    //   </Card>

    <div className='mt-10 bg-no-repeat max-w-sm h-64 overlay  bg-cover'
    style={{backgroundImage:`url(${data.img})`}}
    >
      <div className='px-5 pt-5 h-full relative overlay'>
        
        <h2 className='text-3xl font-semibold text-white'>
             {data.name}
        </h2>
        <button>

        </button>
      </div>
    </div>
    );
};

export default CategoryCard;