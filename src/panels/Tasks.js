import React from 'react'
import {
  Button,
  Checkbox,
  Footer,
  Group,
  Header,
  Panel,
  PanelHeader,
  PanelHeaderBack, Progress,
} from "@vkontakte/vkui";
import Icon16Add from '@vkontakte/icons/dist/16/add';
import PropTypes from 'prop-types'
import Div from "@vkontakte/vkui/dist/components/Div/Div";
import InfoRow from "@vkontakte/vkui/dist/components/InfoRow/InfoRow";


class Tasks extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    tasks: [
      {
        title: 'Сходить в кино',
      },
      {
        title: 'Убить Путина',
      }
    ]
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(this.state.tasks)
  }

  updateTask = value => (
    this.setState({
      tasks: [
          ...this.state.tasks,
        {
          title: value
        }
      ]
    })
  );

  render() {
    return (
        <Panel id={this.props.id}>
          <PanelHeader left={<PanelHeaderBack onClick={this.props.go} data-to={'home'} />}>
            Задачи
          </PanelHeader>
          <Header>
            Сегодня
          </Header>
          <Group>
            {this.state.tasks.length ? this.state.tasks.map(item => <Checkbox>{item.title}</Checkbox>) : <Div>На сегодня задач нет</Div>}
          </Group>
          <Footer>
            <Button before={ <Icon16Add/> } size={"l"} onClick={this.props.go} data-to={"create-task"}>
              Создать задачу
            </Button>
          </Footer>
        </Panel>
    );
  }
}

Tasks.propTypes = {
  id: PropTypes.string,
  task: PropTypes.shape({
    title: PropTypes.string,
    text: PropTypes.string
  })
};

export default Tasks
