import React from 'react'
import { Button } from "./LoadMoreBtn.styled";

interface IProps {
  loadMore: () => void
}
export const LoadMoreBtn = ({loadMore}: IProps ) => {
  // const { loadMore } = props;
  return (
    <Button onClick={loadMore} type="button">
      Load More
    </Button>
  );
};
