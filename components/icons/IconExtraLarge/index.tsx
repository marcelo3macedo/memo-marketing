import React from 'react';

import { Icons } from '@config/Icons';
import { Wrapper } from './styles';

const IconExtraLarge = ({ name, action=null, ...props }:any) => {
  let Icon = Icons[name];
  return  <Wrapper onClick={action}>
            <Icon {...props} />
          </Wrapper>;
};

export default IconExtraLarge;
