import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Icon20MentionOutline from '@vkontakte/icons/dist/20/mention_outline';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import CardGrid from "@vkontakte/vkui/dist/components/CardGrid/CardGrid";
import Card from "@vkontakte/vkui/dist/components/Card/Card";
import Icon24Settings from '@vkontakte/icons/dist/24/settings';
import './Home.css'

const Home = ({id, go, fetchedUser}) => {

  const [active, setActive] = useState(null);

  return (
      <Panel id={id}>
        <PanelHeader>Меню</PanelHeader>
        {fetchedUser &&
        <CardGrid>
          <Card size={"l"} style={{ 'margin-top': '2rem' }}>
            <Div>
              <Avatar src={fetchedUser.photo_200} style={{'margin': '0 auto', 'margin-top': '48px'}} />
            </Div>
            <p align={"center"} style={{color: 'gray'}}>{fetchedUser.first_name} {fetchedUser.last_name}</p>
          </Card>
        </CardGrid>}
        <Group>
          <Button size={"l"} onClick={go} data-to={'tasks'} style={{ margin: '0 auto' }}>
            Перейти к задачам
          </Button>
        </Group>
      </Panel>
  );
};

Home.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
  fetchedUser: PropTypes.shape({
    photo_200: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    city: PropTypes.shape({
      title: PropTypes.string,
    }),
  }),
};

export default Home;
