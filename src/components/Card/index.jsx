import React from 'react';
import { FiThumbsUp } from 'react-icons/fi';

import { CardContainer,
         Content,
         HasInfo,
         ImageBackground,
         PostInfo,
         UserInfo,
         UserPicture,    
    } from './styles';

const Card = () => {
  return (
    <CardContainer>
        <ImageBackground src="data:image/jpeg;base64,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" />
        <Content>
            <UserInfo>
                <UserPicture src="https://avatars.githubusercontent.com/u/77458437?v=4" />
                <div>
                    <h4> Pedro Henrique</h4>
                    <p> Ha 8 min</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4>Projeto para curso HTML e CSS</h4>
                <p>Projeto feito o curso de html e css no bootcamp dio do Global avanade... <strong>Saiba Mais...</strong></p>
            </PostInfo>
            <HasInfo>
                <h4>#HTML #CSS #JavaScript</h4>
                <p>
                    <FiThumbsUp /> 16   
                </p>
            </HasInfo>
        </Content>
    </CardContainer>
  )
};


export { Card };