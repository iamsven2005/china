import { Button } from 'antd';
import { defineDataLoader, defineStaticDataLoader, useData } from 'ice';

export default function () {
      const data = useData();

  return (
    <body>


      <Button style={{ fontSize: '16px' }}>OK</Button>
      <div>Hello ICE</div>
      <div>stars: {data?.stars}</div>
      
    </body>
  );
}

export const dataLoader = defineDataLoader(() => {
  return {
    stars: 1000,
  }
});
export const staticDataLoader = defineStaticDataLoader(() => {
  return {
    stars: 0,
  };
});