import styled from '@emotion/styled';
import {Heading3} from '../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/atoms';
import * as C from '../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/colors';
import Icon from '../../../ignitus-Shared/ignitus-Utilities/Components/icon';
import {flexibleRowDiv} from '../../../ignitus-Shared/ignitus-DesignSystem/shared';

type ArrowProps = {
  isExpanded: boolean;
};

export const NavigationContainer = styled.nav`
  width: 15rem;
  padding: 2rem;
  background: ${C.GreyLight};
`;

export const Heading = styled(Heading3)<ArrowProps>`
  color: ${props => (props.isExpanded ? C.IgnitusBlue : C.Black)};
  margin-bottom: 0;
`;

export const UnorderedList = styled.ul<ArrowProps>`
  list-style: none;
  display: ${props => (props.isExpanded ? 'block' : 'none')};
`;

export const ListItem = styled.li`
  color: ${C.Black};
  padding: 0.5rem;
  cursor: pointer;
`;

export const Arrow = styled(Icon)<ArrowProps>`
  height: 2rem;
  fill: ${props => (props.isExpanded ? C.IgnitusBlue : C.Black)};
  transform: ${props => (props.isExpanded ? 'rotate(90deg)' : 'rotate(0deg)')};
  transition: transform 200ms ease-in-out;
`;

export const HeadingArrowContainer = styled(flexibleRowDiv)`
  margin-top: 1rem;
  justify-content: unset;
  cursor: pointer;
`;
