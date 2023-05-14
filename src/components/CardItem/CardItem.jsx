import { useLocalStorage } from "../../hooks/useLocalStorage";

import * as SC from "./CardItem.styled";
import logo from "../../images/Vector.png";

export const CardItem = (props) => {
  const { card } = props;

  const [followers, setFollowers] = useLocalStorage(
    "followers" + card.id,
    card.followers
  );

  const [noClick, setNoClick] = useLocalStorage("btn" + card.id, false);

  const onClickStartBtn = (event) => {
    setFollowers((prev) => prev + 1);
    setNoClick(true);
    event.preventDefault();
  };

  const onClickAfterPushStartBtn = (event) => {
    event.preventDefault();
    setFollowers((prev) => prev - 1);
    setNoClick(false);
  };

  return (
    <SC.CardContainer key={card.id}>
      <SC.Logo src={logo} width="76" height="22" alt="logo" />

      <SC.AvatarWindow>
        <SC.Avatar src={card.avatar} alt="photo" width="63" height="62" />
      </SC.AvatarWindow>

      <SC.UserName>{card.user}</SC.UserName>

      <SC.TweewsQuantity>{card.tweets} Tweets</SC.TweewsQuantity>
      <SC.FollowersQuantity>
        {followers.toLocaleString("en")} Followers
      </SC.FollowersQuantity>

      {!noClick ? (
        <SC.StartBtn onClick={onClickStartBtn} type="button">
          Follow
        </SC.StartBtn>
      ) : (
        <SC.AfterPushBtn onClick={onClickAfterPushStartBtn} type="button">
          Following
        </SC.AfterPushBtn>
      )}
    </SC.CardContainer>
  );
};
