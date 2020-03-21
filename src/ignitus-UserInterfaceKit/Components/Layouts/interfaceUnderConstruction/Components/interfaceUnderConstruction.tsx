import React from 'react';
import {StyledHeading2} from '../../../../styles';
import {Notfound} from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Layout/ignitus-NotFound/Components/index';
import {UnderConstructionContainer} from '../style';
import {WebsiteUnderConstruction} from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Layout/ignitus-UnderContruction/Components/index';

const interfaceUnderConstruction = () => (
  <UnderConstructionContainer>
    <StyledHeading2>UnderConstruction ★</StyledHeading2>
    <hr />
    <WebsiteUnderConstruction />
  </UnderConstructionContainer>
);

export default interfaceUnderConstruction;
