import styled from "styled-components";
import {
  color,
  space,
  layout,
  flexbox,
  grid,
  background,
  border,
  position,
  SpaceProps,
  ColorProps,
  LayoutProps,
  FlexboxProps,
  GridProps,
  BackgroundProps,
  BorderProps,
  PositionProps,
  ShadowProps,
} from "styled-system";

export type BoxProps = SpaceProps &
  ColorProps &
  LayoutProps &
  FlexboxProps &
  GridProps &
  BackgroundProps &
  BorderProps &
  PositionProps &
  ShadowProps

export const Box = styled("div")<BoxProps>(
  color,
  space,
  layout,
  flexbox,
  grid,
  background,
  border,
  position
);
